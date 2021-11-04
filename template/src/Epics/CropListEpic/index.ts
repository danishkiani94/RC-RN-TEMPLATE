import { Epic, ofType } from 'redux-observable'
import { getType } from 'typesafe-actions'
import { IDependencies } from '../../Services/Api'
import { CropListActions } from '../../Reducers/CropListReducer'
import { map, mergeMap } from 'rxjs/operators'
import { ApiResponse } from 'apisauce'
import { AnyAction } from 'redux'

export const cropListEpic: Epic = (action$, state$, { api }: IDependencies) =>
  action$.pipe(
    ofType(getType(CropListActions.request)),
    mergeMap((action: AnyAction) => {
      return api.CropListApi().pipe(
        map((response: ApiResponse<any>) => {
          if (response.ok) {
            return CropListActions.success(response.data)
          } else {
            return CropListActions.failure({ action, response })
          }
        }),
      )
    }),
  )
