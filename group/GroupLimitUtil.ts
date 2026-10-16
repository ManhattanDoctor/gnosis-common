import { GroupLimitPeriod } from './GroupLimitPeriod';

export class GroupLimitUtil {
    /**
     * Начало текущего окна периодичности лимита. Расход участника считается от
     * этой даты — с её наступлением лимит восстанавливается. Для `TOTAL`
     * (лимит за всё время) и неизвестного значения возвращает `null` — значит
     * окна нет, считаем расход за всё время.
     *
     * Вычисление нативное, без moment: контракт не тянет лишних зависимостей.
     * Неделя начинается с понедельника; месяцы/кварталы/годы — по локальному
     * времени сервера (как CreateDateColumn пишет even-time).
     */
    public static getPeriodStart(period?: GroupLimitPeriod, now: Date = new Date()): Date {
        if (period === GroupLimitPeriod.DAY) {
            return new Date(now.getFullYear(), now.getMonth(), now.getDate());
        }
        if (period === GroupLimitPeriod.WEEK) {
            // Понедельник как начало недели: getDay() даёт 0 для воскресенья
            let day = now.getDay();
            let diff = day === 0 ? 6 : day - 1;
            let start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            start.setDate(start.getDate() - diff);
            return start;
        }
        if (period === GroupLimitPeriod.MONTH) {
            return new Date(now.getFullYear(), now.getMonth(), 1);
        }
        if (period === GroupLimitPeriod.QUARTER) {
            let quarterMonth = Math.floor(now.getMonth() / 3) * 3;
            return new Date(now.getFullYear(), quarterMonth, 1);
        }
        if (period === GroupLimitPeriod.YEAR) {
            return new Date(now.getFullYear(), 0, 1);
        }
        return null;
    }
}
