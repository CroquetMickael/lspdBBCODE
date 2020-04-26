import { WindowLocation, NavigateFn } from "@reach/router";

export type RouteComponentProps<TParams = {}> = Partial<TParams> & {
    path?: string;
    default?: boolean;
    location?: WindowLocation;
    navigate?: NavigateFn;
    uri?: string;
};