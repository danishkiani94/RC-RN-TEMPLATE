import { combineEpics } from 'redux-observable'
import { cropListEpic } from './CropListEpic/index'

export default combineEpics(cropListEpic)
