import {DateTime} from "luxon";

export function format_date_time(date: DateTime | null) {
  if (date) {
    return `${date?.year}-${date?.month < 10 ? `0${date?.month}` : date?.month}-${date?.day < 10 ? `0${date?.day}` : date.day} ${date?.hour < 10 ? `0${date.hour}` : date.hour}:${date?.minute < 10 ? `0${date.minute}` : date.minute}:${date?.second < 10 ? `0${date.second}` : date.second}`
  } else return null

}

