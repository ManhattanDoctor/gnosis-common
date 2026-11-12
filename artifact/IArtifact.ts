import { FileType, FileMime, IFileGeneration } from '../file';
import { ConversationStatus } from '../conversation';
import { IPreview } from '../preview';

export enum ArtifactType {
    FILE = 'FILE',
    CONVERSATION = 'CONVERSATION'
}

export enum ArtifactWorkspace {
    CONTENT_STUDIO = 'CONTENT_STUDIO',
    IMAGE = 'IMAGE',
    VIDEO = 'VIDEO',
    AUDIO = 'AUDIO',
    PROMPT = 'PROMPT',
    SCRIPT = 'SCRIPT',
    CHAT = 'CHAT'
}

/** Identity is the pair (type, id); IDs belong to the original tables. */
export interface IArtifactBase {
    id: number;
    userId: number;
    name: string;
    description?: string;
    createdDate: Date;
    activityDate: Date;
    preview?: IPreview;
    workspace?: ArtifactWorkspace;
}

export interface IFileArtifact extends IArtifactBase {
    type: ArtifactType.FILE;
    fileType: FileType.IMAGE | FileType.VIDEO | FileType.AUDIO | FileType.DOCUMENT;
    mime: FileMime;
    size: number;
    generation?: IFileGeneration;
}

export interface IConversationArtifact extends IArtifactBase {
    type: ArtifactType.CONVERSATION;
    messageCount: number;
    status: ConversationStatus;
    isFavorite: boolean;
    isArchived: boolean;
}

export type IArtifact = IFileArtifact | IConversationArtifact;
