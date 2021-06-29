import {FETCH_USERS_REQUEST} from './Actions'
import { ajax } from 'rxjs/ajax';

export const fetchUserEpic = action$ => action$.pipe(
    ofType(FETCH_USERS_REQUEST),
    mergeMap(action =>
        ajax.getJSON('https://jsonplaceholder.typicode.com/users').pipe(
        map(response => fetchUsersSuccess(response)),
        catchError(error => fetchUsersFailure(error))
      )
    )
  );

