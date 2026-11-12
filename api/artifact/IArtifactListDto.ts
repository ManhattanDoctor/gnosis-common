import { IPaginable, IPagination, ITraceable } from '@ts-core/common';
import { IArtifact, ArtifactType, ArtifactWorkspace } from '../../artifact';
import { FileType, FileMime } from '../../file';
import { ConversationStatus } from '../../conversation';

export interface IArtifactFilter {
    id: number;
    userId: number;
    type: ArtifactType;
    name: string;
    workspace: ArtifactWorkspace;
    createdDate: Date;
    activityDate: Date;
    fileType: FileType;
    mime: FileMime;
    size: number;
    status: ConversationStatus;
    isFavorite: boolean;
    isArchived: boolean;
}

export interface IArtifactListDto extends IPaginable<IArtifactFilter>, ITraceable {
    search?: string;
}

export interface IArtifactListDtoResponse extends IPagination<IArtifact> {}
