export interface Crop {
  crop_type: string
  count: number
}

export interface Current {
  main: string
  description: string
  icon: string
  temp: number
  feels_like: number
  pressure: number
  humidity: number
}

export interface Forecast {
  main: string
  description: string
  icon: string
  temp: number
  min_temp: number
  max_temp: number
  feels_like: number
  pressure: number
  humidity: number
}

export interface Weather {
  current: Current
  forecast: Forecast
}

export interface Data {
  farm_name: string
  crops: Crop[]
  weather: Weather
}

export interface ListResponse {
  status: number
  time: Date
  method: string
  host: string
  path: string
  data: Data
}
