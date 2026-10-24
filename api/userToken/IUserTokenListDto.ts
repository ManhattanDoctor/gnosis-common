import { ITraceable, IPaginable, IPagination } from '@ts-core/common';
import { UserToken } from '../../user';

export interface IUserTokenListDto extends IPaginable<UserToken>, ITraceable { }

export interface IUserTokenListDtoResponse extends IPagination<UserToken> { }
