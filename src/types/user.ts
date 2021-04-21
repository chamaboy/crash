export interface UserData {
  readonly uid: string;
  readonly email: string | null;
  readonly name: string | null;
  readonly provider: string | undefined;
  readonly photoUrl: string | null;
  readonly profile?: string;
}
