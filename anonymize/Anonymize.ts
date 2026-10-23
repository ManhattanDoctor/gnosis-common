import { ApiProperty, ApiPropertyOptional } from '@ts-core/swagger';

/**
 * Каких людей прятать. В договоре или выписке — всех; в статье или книге большинство имён — Платон
 * и Кант, и без них модель не поймёт текст, поэтому там прячутся только частные лица:
 * с полным отчеством или в полях документа
 */
export enum AnonymizePeople {
    ALL = 'ALL',
    PRIVATE = 'PRIVATE'
}

/**
 * Детекторы персональных данных сервиса анонимизации. regex стоит оставлять: только он находит
 * номера с контрольной суммой (паспорт, ИНН, СНИЛС, карта, счёт). llm работает только если назван
 */
export enum AnonymizeDetector {
    REGEX = 'REGEX',
    NATASHA = 'NATASHA',
    SPACY = 'SPACY',
    GLINER = 'GLINER',
    LLM = 'LLM'
}

/** Виды персональных данных, которые различает сервис анонимизации */
export enum AnonymizeType {
    PERSON = 'PERSON',
    ADDRESS = 'ADDRESS',
    EMAIL = 'EMAIL',
    PHONE = 'PHONE',
    PASSPORT = 'PASSPORT',
    BIRTH_DATE = 'BIRTH_DATE',
    INN = 'INN',
    SNILS = 'SNILS',
    OGRN = 'OGRN',
    CARD = 'CARD',
    ACCOUNT = 'ACCOUNT',
    DOCUMENT = 'DOCUMENT'
}

/** Не заданное решает сам сервис анонимизации своими настройками */
export interface IAnonymizeOptions {
    people?: AnonymizePeople;
    /** Вымышленные люди вместо меток для русских имён */
    surrogates?: boolean;
    /**
     * Свои двойники: полные вымышленные ФИО с однозначным полом — «Соколов Олег Викторович», —
     * которыми заменять людей вместо встроенного списка. Двойник того же пола подставляется в нужном
     * падеже; кончились свои — берётся встроенный. Заданные двойники включают режим сами, без surrogates
     */
    surrogateNames?: Array<string>;
    /** Не задано — все виды */
    types?: Array<AnonymizeType>;
    /** Какие детекторы использовать. Не задано — все загруженные, кроме тех, что только по запросу (llm) */
    detectors?: Array<AnonymizeDetector>;
    /** Что прятать всегда, даже если сервис этого не находит: фамилия, название проекта. В любом падеже */
    hide?: Array<string>;
    /** Что не прятать никогда, например название банка-партнёра */
    keep?: Array<string>;
}

/**
 * Где в анонимном тексте стоит замена: по ним подсвечивается спрятанное. Вымышленный человек стоит
 * в тексте в своём падеже, а ключ — его начальная форма в таблице меток
 */
export class AnonymizeMark {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @ApiProperty({ description: 'Start of the replacement in the anonymized text, in UTF-16 code units' })
    public start: number;
    @ApiProperty({ description: 'End of the replacement, not included' })
    public end: number;
    @ApiProperty({ description: 'Kind of the hidden data' })
    public type: string;
    @ApiProperty({ description: 'Key of the vault: a label or a made-up person in the nominative' })
    public key: string;
}

/** Метка → исходное значение. Это сами персональные данные: в модель таблица не отправляется */
export type IAnonymizeVault = Record<string, string>;

/**
 * Где анонимизация могла не справиться: имена на языке, которого сервис не знает, или вымышленное
 * имя, которое модель переиначила и которое не вернулось. Сами данные сюда не попадают
 */
export class AnonymizeWarning {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @ApiProperty({ description: 'LANGUAGE_LIMITED, LANGUAGE_UNSUPPORTED — names may be missed; SURROGATE_LEFT, LABEL_UNKNOWN — something was not put back' })
    public code: string;
    @ApiPropertyOptional({ description: 'Language code, the made-up name or the label the warning is about' })
    public value?: string;
}
