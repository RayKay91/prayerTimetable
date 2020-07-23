//jshint esversion: 10
const timetable = [
  {
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},
    10: {},
    11: {},
    12: {},
    13: {},
    14: {},
    15: {},
    16: {},
    17: {},
    18: {},
    19: {},
    20: {},
    21: {},
    22: {},
    23: {},
    24: {},
    25: {},
    26: {},
    27: {},
    28: {},
    29: {},
    30: {},
    31: {},
  },
  {
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},
    10: {},
    11: {},
    12: {},
    13: {},
    14: {},
    15: {},
    16: {},
    17: {},
    18: {},
    19: {},
    20: {},
    21: {},
    22: {},
    23: {},
    24: {},
    25: {},
    26: {},
    27: {},
    28: {},
    29: {},
  },
  {
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},
    10: {},
    11: {},
    12: {},
    13: {},
    14: {},
    15: {},
    16: {},
    17: {},
    18: {},
    19: {},
    20: {},
    21: {},
    22: {},
    23: {},
    24: {},
    25: {},
    26: {},
    27: {},
    28: {},
    29: {},
    30: {},
    31: {},
  },
  {
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},
    10: {},
    11: {},
    12: {},
    13: {},
    14: {},
    15: {},
    16: {},
    17: {},
    18: {},
    19: {},
    20: {},
    21: {},
    22: {},
    23: {},
    24: {},
    25: {},
    26: {},
    27: {},
    28: {},
    29: {},
    30: {},
  },
  {
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},
    10: {},
    11: {},
    12: {},
    13: {},
    14: {},
    15: {},
    16: {},
    17: {},
    18: {},
    19: {},
    20: {},
    21: {},
    22: {},
    23: {},
    24: {
      fajr: '02:53',
      fajrJamaa: '03:15',
      sunrise: '04:59',
      dhuhr: '13:02',
      dhuhrJamaa: '13:30',
      asr: '17:17',
      asrJamaa: '17:45',
      maghrib: '21:03',
      isha: '22:40',
      ishaJamaa: '23:00',
    },
    25: {
      fajr: '02:51',
      fajrJamaa: '03:15',
      sunrise: '04:58',
      dhuhr: '13:02',
      dhuhrJamaa: '13:30',
      asr: '17:17',
      asrJamaa: '17:45',
      maghrib: '21:17',
      isha: '22:42',
      ishaJamaa: '23:00',
    },
    26: {
      fajr: '02:49',
      fajrJamaa: '03:15',
      sunrise: '04:57',
      dhuhr: '13:02',
      dhuhrJamaa: '13:30',
      asr: '17:18',
      asrJamaa: '17:45',
      maghrib: '21:06',
      isha: '22:43',
      ishaJamaa: '23:00',
    },
    27: {
      number: 27,
      fajr: '02:47',
      fajrJamaa: '03:15',
      sunrise: '04:56',
      dhuhr: '13:02',
      dhuhrJamaa: '13:30',
      asr: '17:18',
      asrJamaa: '17:45',
      maghrib: '21:07',
      isha: '22:45',
      ishaJamaa: '23:00',
    },
    28: {
      fajr: '02:45',
      fajrJamaa: '03:15',
      sunrise: '04:55',
      dhuhr: '13:02',
      dhuhrJamaa: '13:30',
      asr: '17:19',
      asrJamaa: '17:45',
      maghrib: '21:08',
      isha: '22:46',
      ishaJamaa: '23:00',
    },
    29: {
      fajr: '02:43',
      fajrJamaa: '03:15',
      sunrise: '04:54',
      dhuhr: '13:02',
      dhuhrJamaa: '13:30',
      asr: '17:19',
      asrJamaa: '17:45',
      maghrib: '21:10',
      isha: '22:48',
      ishaJamaa: '23:00',
    },
    30: {
      fajr: '02:41',
      fajrJamaa: '03:15',
      sunrise: '04:53',
      dhuhr: '13:03',
      dhuhrJamaa: '13:30',
      asr: '17:20',
      asrJamaa: '17:45',
      maghrib: '21:11',
      isha: '22:49',
      ishaJamaa: '23:00',
    },
    31: {
      fajr: '02:39',
      fajrJamaa: '03:15',
      sunrise: '04:52',
      dhuhr: '13:03',
      dhuhrJamaa: '13:30',
      asr: '17:20',
      asrJamaa: '17:45',
      maghrib: '21:12',
      isha: '22:50',
      ishaJamaa: '23:00',
    },
  },
  {
    1: {
      fajr: '02:37',
      fajrJamaa: '03:15',
      sunrise: '04:52',
      dhuhr: '13:03',
      dhuhrJamaa: '13:30',
      asr: '17:21',
      asrJamaa: '17:45',
      maghrib: '21:13',
      isha: '22:51',
      ishaJamaa: '23:00',
    },
    2: {
      fajr: '02:35',
      fajrJamaa: '03:15',
      sunrise: '04:51',
      dhuhr: '13:03',
      dhuhrJamaa: '13:30',
      asr: '17:21',
      asrJamaa: '17:45',
      maghrib: '21:14',
      isha: '22:52',
      ishaJamaa: '23:00',
    },
    3: {
      fajr: '02:33',
      fajrJamaa: '03:15',
      sunrise: '04:50',
      dhuhr: '13:03',
      dhuhrJamaa: '13:30',
      asr: '17:22',
      asrJamaa: '17:45',
      maghrib: '21:15',
      isha: '22:53',
      ishaJamaa: '23:00',
    },
    4: {
      fajr: '02:31',
      fajrJamaa: '03:15',
      sunrise: '04:49',
      dhuhr: '13:03',
      dhuhrJamaa: '13:30',
      asr: '17:22',
      asrJamaa: '17:45',
      maghrib: '21:16',
      isha: '22:54',
      ishaJamaa: '23:00',
    },
    5: {
      fajr: '02:30',
      fajrJamaa: '03:00',
      sunrise: '04:49',
      dhuhr: '13:03',
      dhuhrJamaa: '13:30',
      asr: '17:23',
      asrJamaa: '17:45',
      maghrib: '21:17',
      isha: '22:55',
      ishaJamaa: '23:15',
    },
    6: {
      fajr: '02:29',
      fajrJamaa: '03:00',
      sunrise: '04:48',
      dhuhr: '13:04',
      dhuhrJamaa: '13:30',
      asr: '17:23',
      asrJamaa: '17:45',
      maghrib: '21:18',
      isha: '22:56',
      ishaJamaa: '23:15',
    },
    7: {
      fajr: '02:28',
      fajrJamaa: '03:00',
      sunrise: '04:48',
      dhuhr: '13:04',
      dhuhrJamaa: '13:30',
      asr: '17:23',
      asrJamaa: '17:45',
      maghrib: '21:19',
      isha: '22:57',
      ishaJamaa: '23:15',
    },
    8: {
      fajr: '02:27',
      fajrJamaa: '03:00',
      sunrise: '04:47',
      dhuhr: '13:04',
      dhuhrJamaa: '13:30',
      asr: '17:24',
      asrJamaa: '17:45',
      maghrib: '21:20',
      isha: '22:58',
      ishaJamaa: '23:15',
    },
    9: {
      fajr: '02:27',
      fajrJamaa: '03:00',
      sunrise: '04:47',
      dhuhr: '13:04',
      dhuhrJamaa: '13:30',
      asr: '17:24',
      asrJamaa: '17:45',
      maghrib: '21:20',
      isha: '22:59',
      ishaJamaa: '23:15',
    },
    10: {
      fajr: '02:26',
      fajrJamaa: '03:00',
      sunrise: '04:46',
      dhuhr: '13:04',
      dhuhrJamaa: '13:30',
      asr: '17:25',
      asrJamaa: '17:45',
      maghrib: '21:21',
      isha: '23:00',
      ishaJamaa: '23:15',
    },
    11: {
      fajr: '02:26',
      fajrJamaa: '03:00',
      sunrise: '04:46',
      dhuhr: '13:05',
      dhuhrJamaa: '13:30',
      asr: '17:25',
      asrJamaa: '17:45',
      maghrib: '21:22',
      isha: '23:01',
      ishaJamaa: '23:15',
    },
    12: {
      number: 12,
      fajr: '02:25',
      fajrJamaa: '03:00',
      sunrise: '04:46',
      dhuhr: '13:05',
      dhuhrJamaa: '13:30',
      asr: '17:25',
      asrJamaa: '17:45',
      maghrib: '21:23',
      isha: '23:02',
      ishaJamaa: '23:15',
    },
    13: {
      fajr: '02:25',
      fajrJamaa: '03:00',
      sunrise: '04:46',
      dhuhr: '13:05',
      dhuhrJamaa: '13:30',
      asr: '17:26',
      asrJamaa: '17:45',
      maghrib: '21:23',
      isha: '23:03',
      ishaJamaa: '23:15',
    },
    14: {
      fajr: '02:24',
      fajrJamaa: '03:00',
      sunrise: '04:45',
      dhuhr: '13:05',
      dhuhrJamaa: '13:30',
      asr: '17:26',
      asrJamaa: '17:45',
      maghrib: '21:24',
      isha: '23:04',
      ishaJamaa: '23:15',
    },
    15: {
      fajr: '02:24',
      fajrJamaa: '03:00',
      sunrise: '04:45',
      dhuhr: '13:05',
      dhuhrJamaa: '13:30',
      asr: '17:26',
      asrJamaa: '17:45',
      maghrib: '21:24',
      isha: '23:04',
      ishaJamaa: '23:15',
    },
    16: {
      fajr: '02:24',
      fajrJamaa: '03:00',
      sunrise: '04:45',
      dhuhr: '13:06',
      dhuhrJamaa: '13:30',
      asr: '17:27',
      asrJamaa: '17:45',
      maghrib: '21:25',
      isha: '23:05',
      ishaJamaa: '23:15',
    },
    17: {
      fajr: '02:23',
      fajrJamaa: '03:00',
      sunrise: '04:45',
      dhuhr: '13:06',
      dhuhrJamaa: '13:30',
      asr: '17:27',
      asrJamaa: '17:45',
      maghrib: '21:25',
      isha: '23:05',
      ishaJamaa: '23:15',
    },
    18: {
      fajr: '02:23',
      fajrJamaa: '03:00',
      sunrise: '04:45',
      dhuhr: '13:06',
      dhuhrJamaa: '13:30',
      asr: '17:27',
      asrJamaa: '17:45',
      maghrib: '21:25',
      isha: '23:06',
      ishaJamaa: '23:15',
    },
    19: {
      fajr: '02:23',
      fajrJamaa: '03:00',
      sunrise: '04:45',
      dhuhr: '13:06',
      dhuhrJamaa: '13:30',
      asr: '17:27',
      asrJamaa: '17:45',
      maghrib: '21:26',
      isha: '23:06',
      ishaJamaa: '23:15',
    },
    20: {
      fajr: '02:23',
      fajrJamaa: '03:00',
      sunrise: '04:46',
      dhuhr: '13:07',
      dhuhrJamaa: '13:30',
      asr: '17:28',
      asrJamaa: '17:45',
      maghrib: '21:26',
      isha: '23:07',
      ishaJamaa: '23:15',
    },
    21: {
      fajr: '02:23',
      fajrJamaa: '03:00',
      sunrise: '04:46',
      dhuhr: '13:07',
      dhuhrJamaa: '13:30',
      asr: '17:28',
      asrJamaa: '17:45',
      maghrib: '21:26',
      isha: '23:07',
      ishaJamaa: '23:15',
    },
    22: {
      fajr: '02:23',
      fajrJamaa: '03:00',
      sunrise: '04:46',
      dhuhr: '13:07',
      dhuhrJamaa: '13:30',
      asr: '17:28',
      asrJamaa: '17:45',
      maghrib: '21:26',
      isha: '23:07',
      ishaJamaa: '23:15',
    },
    23: {
      fajr: '02:23',
      fajrJamaa: '02:45',
      sunrise: '04:46',
      dhuhr: '13:07',
      dhuhrJamaa: '13:30',
      asr: '17:28',
      asrJamaa: '18:00',
      maghrib: '21:27',
      maghribJamaa: '21:32',
      isha: '23:07',
      ishaJamaa: '23:22',
    },
    24: {
      fajr: '02:24',
      fajrJamaa: '02:45',
      sunrise: '04:47',
      dhuhr: '13:07',
      dhuhrJamaa: '13:30',
      asr: '17:28',
      asrJamaa: '18:00',
      maghrib: '21:27',
      maghribJamaa: '21:32',
      isha: '23:07',
      ishaJamaa: '23:22',
    },
    25: {
      fajr: '02:24',
      fajrJamaa: '02:45',
      sunrise: '04:47',
      dhuhr: '13:08',
      dhuhrJamaa: '13:30',
      asr: '17:29',
      asrJamaa: '18:00',
      maghrib: '21:27',
      maghribJamaa: '21:32',
      isha: '23:07',
      ishaJamaa: '23:22',
    },
    26: {
      fajr: '02:25',
      fajrJamaa: '02:45',
      sunrise: '04:47',
      dhuhr: '13:08',
      dhuhrJamaa: '13:30',
      asr: '17:29',
      asrJamaa: '18:00',
      maghrib: '21:27',
      maghribJamaa: '21:32',
      isha: '23:07',
      ishaJamaa: '23:22',
    },
    27: {
      fajr: '02:26',
      fajrJamaa: '02:45',
      sunrise: '04:48',
      dhuhr: '13:08',
      dhuhrJamaa: '13:30',
      asr: '17:29',
      asrJamaa: '18:00',
      maghrib: '21:26',
      maghribJamaa: '21:31',
      isha: '23:07',
      ishaJamaa: '23:22',
    },
    28: {
      fajr: '02:27',
      fajrJamaa: '02:45',
      sunrise: '04:48',
      dhuhr: '13:08',
      dhuhrJamaa: '13:30',
      asr: '17:29',
      asrJamaa: '18:00',
      maghrib: '21:26',
      maghribJamaa: '21:31',
      isha: '23:06',
      ishaJamaa: '23:21',
    },
    29: {
      fajr: '02:28',
      fajrJamaa: '02:45',
      sunrise: '04:49',
      dhuhr: '13:08',
      dhuhrJamaa: '13:30',
      asr: '17:29',
      asrJamaa: '18:00',
      maghrib: '21:26',
      maghribJamaa: '21:31',
      isha: '23:06',
      ishaJamaa: '23:21',
    },
    30: {
      fajr: '02:29',
      fajrJamaa: '02:45',
      sunrise: '04:50',
      dhuhr: '13:09',
      dhuhrJamaa: '13:30',
      asr: '17:29',
      asrJamaa: '18:00',
      maghrib: '21:26',
      maghribJamaa: '21:31',
      isha: '23:05',
      ishaJamaa: '23:20',
    },
  },
  {
    1: {
      fajr: '02:30',
      fajrJamaa: '02:45',
      sunrise: '04:50',
      dhuhr: '13:09',
      dhuhrJamaa: '13:30',
      asr: '17:29',
      asrJamaa: '18:00',
      maghrib: '21:26',
      maghribJamaa: '21:31',
      isha: '23:04',
      ishaJamaa: '23:15',
    },
    2: {
      fajr: '02:32',
      fajrJamaa: '02:45',
      sunrise: '04:51',
      dhuhr: '13:09',
      dhuhrJamaa: '13:30',
      asr: '17:29',
      asrJamaa: '18:00',
      maghrib: '21:25',
      maghribJamaa: '21:30',
      isha: '23:04',
      ishaJamaa: '23:15',
    },
    3: {
      fajr: '02:33',
      fajrJamaa: '02:45',
      sunrise: '04:52',
      dhuhr: '13:09',
      dhuhrJamaa: '13:30',
      asr: '17:29',
      asrJamaa: '18:00',
      maghrib: '21:25',
      maghribJamaa: '21:30',
      isha: '23:03',
      ishaJamaa: '23:15',
    },
    4: {
      fajr: '02:35',
      fajrJamaa: '02:45',
      sunrise: '04:53',
      dhuhr: '13:09',
      dhuhrJamaa: '13:30',
      asr: '17:29',
      asrJamaa: '18:00',
      maghrib: '21:24',
      maghribJamaa: '21:29',
      isha: '23:02',
      ishaJamaa: '23:15',
    },
    5: {
      fajr: '02:37',
      fajrJamaa: '02:45',
      sunrise: '04:53',
      dhuhr: '13:10',
      dhuhrJamaa: '13:30',
      asr: '17:29',
      asrJamaa: '18:00',
      maghrib: '21:24',
      maghribJamaa: '21:29',
      isha: '23:01',
      ishaJamaa: '23:15',
    },
    6: {
      fajr: '02:39',
      fajrJamaa: '03:30',
      sunrise: '04:54',
      dhuhr: '13:10',
      dhuhrJamaa: '13:30',
      asr: '17:29',
      asrJamaa: '18:00',
      maghrib: '21:23',
      maghribJamaa: '21:28',
      isha: '23:00',
      ishaJamaa: '23:00',
    },
    7: {
      fajr: '02:40',
      fajrJamaa: '03:30',
      sunrise: '04:55',
      dhuhr: '13:10',
      dhuhrJamaa: '13:30',
      asr: '17:29',
      asrJamaa: '18:00',
      maghrib: '21:23',
      maghribJamaa: '21:28',
      isha: '22:59',
      ishaJamaa: '23:00',
    },
    8: {
      fajr: '02:42',
      fajrJamaa: '03:30',
      sunrise: '04:56',
      dhuhr: '13:10',
      dhuhrJamaa: '13:30',
      asr: '17:29',
      asrJamaa: '18:00',
      maghrib: '21:22',
      maghribJamaa: '21:27',
      isha: '22:58',
      ishaJamaa: '23:00',
    },
    9: {
      fajr: '02:44',
      fajrJamaa: '03:30',
      sunrise: '04:57',
      dhuhr: '13:10',
      dhuhrJamaa: '13:30',
      asr: '17:29',
      asrJamaa: '18:00',
      maghrib: '21:21',
      maghribJamaa: '21:26',
      isha: '22:56',
      ishaJamaa: '23:00',
    },
    10: {
      fajr: '02:46',
      fajrJamaa: '03:30',
      sunrise: '04:58',
      dhuhr: '13:10',
      dhuhrJamaa: '13:30',
      asr: '17:29',
      asrJamaa: '18:00',
      maghrib: '21:21',
      maghribJamaa: '21:26',
      isha: '22:55',
      ishaJamaa: '23:00',
    },
    11: {
      fajr: '02:49',
      fajrJamaa: '03:30',
      sunrise: '04:59',
      dhuhr: '13:11',
      dhuhrJamaa: '13:30',
      asr: '17:28',
      asrJamaa: '18:00',
      maghrib: '21:20',
      maghribJamaa: '21:25',
      isha: '22:54',
      ishaJamaa: '23:00',
    },
    12: {
      fajr: '02:51',
      fajrJamaa: '03:30',
      sunrise: '05:00',
      dhuhr: '13:11',
      dhuhrJamaa: '13:30',
      asr: '17:28',
      asrJamaa: '18:00',
      maghrib: '21:19',
      maghribJamaa: '21:24',
      isha: '22:52',
      ishaJamaa: '23:00',
    },
    13: {
      fajr: '02:53',
      fajrJamaa: '03:30',
      sunrise: '05:01',
      dhuhr: '13:11',
      dhuhrJamaa: '13:30',
      asr: '17:28',
      asrJamaa: '18:00',
      maghrib: '21:18',
      maghribJamaa: '21:23',
      isha: '22:51',
      ishaJamaa: '23:00',
    },
    14: {
      fajr: '02:55',
      fajrJamaa: '03:30',
      sunrise: '05:03',
      dhuhr: '13:11',
      dhuhrJamaa: '13:30',
      asr: '17:28',
      asrJamaa: '18:00',
      maghrib: '21:17',
      maghribJamaa: '21:22',
      isha: '22:49',
      ishaJamaa: '23:00',
    },
    15: {
      fajr: '02:57',
      fajrJamaa: '03:30',
      sunrise: '05:04',
      dhuhr: '13:11',
      dhuhrJamaa: '13:30',
      asr: '17:28',
      asrJamaa: '18:00',
      maghrib: '21:16',
      maghribJamaa: '21:21',
      isha: '22:48',
      ishaJamaa: '23:00',
    },
    16: {
      fajr: '03:00',
      fajrJamaa: '03:30',
      sunrise: '05:05',
      dhuhr: '13:11',
      dhuhrJamaa: '13:30',
      asr: '17:27',
      asrJamaa: '18:00',
      maghrib: '21:15',
      maghribJamaa: '21:20',
      isha: '22:46',
      ishaJamaa: '23:00',
    },
    17: {
      fajr: '03:02',
      fajrJamaa: '03:30',
      sunrise: '05:06',
      dhuhr: '13:11',
      dhuhrJamaa: '13:30',
      asr: '17:27',
      asrJamaa: '18:00',
      maghrib: '21:14',
      maghribJamaa: '21:19',
      isha: '22:44',
      ishaJamaa: '23:00',
    },
    18: {
      fajr: '03:04',
      fajrJamaa: '03:30',
      sunrise: '05:08',
      dhuhr: '13:11',
      dhuhrJamaa: '13:30',
      asr: '17:27',
      asrJamaa: '18:00',
      maghrib: '21:13',
      maghribJamaa: '21:18',
      isha: '22:42',
      ishaJamaa: '23:00',
    },
    19: {
      fajr: '03:06',
      fajrJamaa: '03:30',
      sunrise: '05:09',
      dhuhr: '13:11',
      dhuhrJamaa: '13:30',
      asr: '17:26',
      asrJamaa: '18:00',
      maghrib: '21:12',
      maghribJamaa: '21:17',
      isha: '22:41',
      ishaJamaa: '23:00',
    },
    20: {
      fajr: '03:08',
      fajrJamaa: '04:00',
      sunrise: '05:10',
      dhuhr: '13:11',
      dhuhrJamaa: '13:30',
      asr: '17:26',
      asrJamaa: '18:00',
      maghrib: '21:11',
      maghribJamaa: '21:16',
      isha: '22:40',
      ishaJamaa: '22:45',
    },
    21: {
      fajr: '03:11',
      fajrJamaa: '04:00',
      sunrise: '05:11',
      dhuhr: '13:11',
      dhuhrJamaa: '13:30',
      asr: '17:25',
      asrJamaa: '18:00',
      maghrib: '21:09',
      maghribJamaa: '21:14',
      isha: '22:39',
      ishaJamaa: '22:45',
    },
    22: {
      fajr: '03:13',
      fajrJamaa: '04:00',
      sunrise: '05:13',
      dhuhr: '13:11',
      dhuhrJamaa: '13:30',
      asr: '17:25',
      asrJamaa: '18:00',
      maghrib: '21:08',
      maghribJamaa: '21:13',
      isha: '22:37',
      ishaJamaa: '22:45',
    },
    23: {
      fajr: '03:15',
      fajrJamaa: '04:00',
      sunrise: '05:14',
      dhuhr: '13:12',
      dhuhrJamaa: '13:30',
      asr: '17:25',
      asrJamaa: '18:00',
      maghrib: '21:07',
      isha: '22:35',
      ishaJamaa: '22:45',
    },
    24: {
      fajr: '03:17',
      fajrJamaa: '04:00',
      sunrise: '05:16',
      dhuhr: '13:12',
      dhuhrJamaa: '13:30',
      asr: '17:24',
      asrJamaa: '18:00',
      maghrib: '21:05',
      isha: '22:33',
      ishaJamaa: '22:45',
    },
    25: {
      fajr: '03:19',
      fajrJamaa: '04:00',
      sunrise: '05:17',
      dhuhr: '13:12',
      dhuhrJamaa: '13:30',
      asr: '17:24',
      asrJamaa: '18:00',
      maghrib: '21:04',
      isha: '22:31',
      ishaJamaa: '22:45',
    },
    26: {
      fajr: '03:21',
      fajrJamaa: '04:00',
      sunrise: '05:19',
      dhuhr: '13:12',
      dhuhrJamaa: '13:30',
      asr: '17:23',
      asrJamaa: '18:00',
      maghrib: '21:03',
      isha: '22:29',
      ishaJamaa: '22:45',
    },
    27: {
      fajr: '03:23',
      fajrJamaa: '04:00',
      sunrise: '05:20',
      dhuhr: '13:12',
      dhuhrJamaa: '13:30',
      asr: '17:22',
      asrJamaa: '18:00',
      maghrib: '21:01',
      isha: '22:27',
      ishaJamaa: '22:45',
    },
    28: {
      fajr: '03:25',
      fajrJamaa: '04:00',
      sunrise: '05:21',
      dhuhr: '13:12',
      dhuhrJamaa: '13:30',
      asr: '17:22',
      asrJamaa: '18:00',
      maghrib: '21:00',
      isha: '22:25',
      ishaJamaa: '22:45',
    },
    29: {
      fajr: '03:27',
      fajrJamaa: '04:00',
      sunrise: '05:23',
      dhuhr: '13:12',
      dhuhrJamaa: '13:30',
      asr: '17:21',
      asrJamaa: '18:00',
      maghrib: '20:58',
      isha: '22:23',
      ishaJamaa: '22:45',
    },
    30: {
      fajr: '03:29',
      fajrJamaa: '04:00',
      sunrise: '05:24',
      dhuhr: '13:11',
      dhuhrJamaa: '13:30',
      asr: '17:21',
      asrJamaa: '18:00',
      maghrib: '20:57',
      isha: '22:22',
      ishaJamaa: '22:45',
    },
    31: {
      fajr: '03:31',
      fajrJamaa: '4:30',
      sunrise: '05:26',
      dhuhr: '13:11',
      dhuhrJamaa: '13:30',
      asr: '17:20',
      asrJamaa: '18:00',
      maghrib: '20:55',
      isha: '22:20',
      ishaJamaa: '22:30',
    },
  },
  {
    1: {
      fajr: '03:33',
      fajrJamaa: '4:30',
      sunrise: '05:27',
      dhuhr: '13:11',
      dhuhrJamaa: '13:30',
      asr: '17:19',
      asrJamaa: '18:00',
      maghrib: '20:53',
      isha: '22:18',
      ishaJamaa: '22:30',
    },
    2: {
      fajr: '03:35',
      fajrJamaa: '4:30',
      sunrise: '05:29',
      dhuhr: '13:11',
      dhuhrJamaa: '13:30',
      asr: '17:19',
      asrJamaa: '18:00',
      maghrib: '20:52',
      isha: '22:15',
      ishaJamaa: '22:30',
    },
    3: {
      fajr: '03:37',
      fajrJamaa: '4:30',
      sunrise: '05:30',
      dhuhr: '13:11',
      dhuhrJamaa: '13:30',
      asr: '17:18',
      asrJamaa: '18:00',
      maghrib: '20:50',
      isha: '22:13',
      ishaJamaa: '22:30',
    },
    4: {
      fajr: '03:39',
      fajrJamaa: '4:30',
      sunrise: '05:32',
      dhuhr: '13:11',
      dhuhrJamaa: '13:30',
      asr: '17:17',
      asrJamaa: '18:00',
      maghrib: '20:48',
      isha: '22:11',
      ishaJamaa: '22:30',
    },
    5: {
      fajr: '03:41',
      fajrJamaa: '4:30',
      sunrise: '05:34',
      dhuhr: '13:11',
      dhuhrJamaa: '13:30',
      asr: '17:16',
      asrJamaa: '18:00',
      maghrib: '20:47',
      isha: '22:08',
      ishaJamaa: '22:30',
    },
    6: {
      fajr: '03:43',
      fajrJamaa: '4:30',
      sunrise: '05:35',
      dhuhr: '13:11',
      dhuhrJamaa: '13:30',
      asr: '17:15',
      asrJamaa: '18:00',
      maghrib: '20:45',
      isha: '22:06',
      ishaJamaa: '22:30',
    },
    7: {
      fajr: '03:45',
      fajrJamaa: '4:30',
      sunrise: '05:37',
      dhuhr: '13:11',
      dhuhrJamaa: '13:30',
      asr: '17:15',
      asrJamaa: '18:00',
      maghrib: '20:43',
      isha: '22:04',
      ishaJamaa: '22:15',
    },
    8: {
      fajr: '03:47',
      fajrJamaa: '4:30',
      sunrise: '05:38',
      dhuhr: '13:11',
      dhuhrJamaa: '13:30',
      asr: '17:14',
      asrJamaa: '18:00',
      maghrib: '20:41',
      isha: '22:02',
      ishaJamaa: '22:15',
    },
    9: {
      fajr: '03:49',
      fajrJamaa: '4:30',
      sunrise: '05:40',
      dhuhr: '13:11',
      dhuhrJamaa: '13:30',
      asr: '17:13',
      asrJamaa: '18:00',
      maghrib: '20:39',
      isha: '22:00',
      ishaJamaa: '22:15',
    },
    10: {
      fajr: '03:51',
      fajrJamaa: '4:30',
      sunrise: '05:42',
      dhuhr: '13:10',
      dhuhrJamaa: '13:30',
      asr: '17:12',
      asrJamaa: '18:00',
      maghrib: '20:38',
      isha: '21:58',
      ishaJamaa: '22:15',
    },
    11: {
      fajr: '03:53',
      fajrJamaa: '4:30',
      sunrise: '05:43',
      dhuhr: '13:10',
      dhuhrJamaa: '13:30',
      asr: '17:11',
      asrJamaa: '18:00',
      maghrib: '20:36',
      isha: '21:57',
      ishaJamaa: '22:15',
    },
    12: {
      fajr: '03:56',
      fajrJamaa: '4:30',
      sunrise: '05:45',
      dhuhr: '13:10',
      dhuhrJamaa: '13:30',
      asr: '17:10',
      asrJamaa: '18:00',
      maghrib: '20:34',
      isha: '21:54',
      ishaJamaa: '22:15',
    },
    13: {
      fajr: '03:58',
      fajrJamaa: '4:30',
      sunrise: '05:46',
      dhuhr: '13:10',
      dhuhrJamaa: '13:30',
      asr: '17:09',
      asrJamaa: '18:00',
      maghrib: '20:32',
      isha: '21:52',
      ishaJamaa: '22:15',
    },
    14: {
      fajr: '04:01',
      fajrJamaa: '5:00',
      sunrise: '05:48',
      dhuhr: '13:10',
      dhuhrJamaa: '13:30',
      asr: '17:08',
      asrJamaa: '17:30',
      maghrib: '20:30',
      isha: '21:49',
      ishaJamaa: '22:00',
    },
    15: {
      fajr: '04:03',
      fajrJamaa: '5:00',
      sunrise: '05:50',
      dhuhr: '13:10',
      dhuhrJamaa: '13:30',
      asr: '17:07',
      asrJamaa: '17:30',
      maghrib: '20:28',
      isha: '21:47',
      ishaJamaa: '22:00',
    },
    16: {
      fajr: '04:05',
      fajrJamaa: '5:00',
      sunrise: '05:51',
      dhuhr: '13:09',
      dhuhrJamaa: '13:30',
      asr: '17:06',
      asrJamaa: '17:30',
      maghrib: '20:26',
      isha: '21:44',
      ishaJamaa: '22:00',
    },
    17: {
      fajr: '04:07',
      fajrJamaa: '5:00',
      sunrise: '05:53',
      dhuhr: '13:09',
      dhuhrJamaa: '13:30',
      asr: '17:05',
      asrJamaa: '17:30',
      maghrib: '20:24',
      isha: '21:41',
      ishaJamaa: '22:00',
    },
    18: {
      fajr: '04:09',
      fajrJamaa: '5:00',
      sunrise: '05:54',
      dhuhr: '13:09',
      dhuhrJamaa: '13:30',
      asr: '17:04',
      asrJamaa: '17:30',
      maghrib: '20:22',
      isha: '21:39',
      ishaJamaa: '22:00',
    },
    19: {
      fajr: '04:11',
      fajrJamaa: '5:00',
      sunrise: '05:56',
      dhuhr: '13:09',
      dhuhrJamaa: '13:30',
      asr: '17:03',
      asrJamaa: '17:30',
      maghrib: '20:20',
      isha: '21:36',
      ishaJamaa: '22:00',
    },
    20: {
      fajr: '04:13',
      fajrJamaa: '5:00',
      sunrise: '05:58',
      dhuhr: '13:09',
      dhuhrJamaa: '13:30',
      asr: '17:02',
      asrJamaa: '17:30',
      maghrib: '20:18',
      isha: '21:34',
      ishaJamaa: '22:00',
    },
    21: {},
    22: {},
    23: {},
    24: {},
    25: {},
    26: {},
    27: {},
    28: {},
    29: {},
    30: {},
    31: {},
  },
  {
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},
    10: {},
    11: {},
    12: {},
    13: {},
    14: {},
    15: {},
    16: {},
    17: {},
    18: {},
    19: {},
    20: {},
    21: {},
    22: {},
    23: {},
    24: {},
    25: {},
    26: {},
    27: {},
    28: {},
    29: {},
    30: {},
  },
  {
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},
    10: {},
    11: {},
    12: {},
    13: {},
    14: {},
    15: {},
    16: {},
    17: {},
    18: {},
    19: {},
    20: {},
    21: {},
    22: {},
    23: {},
    24: {},
    25: {},
    26: {},
    27: {},
    28: {},
    29: {},
    30: {},
    31: {},
  },
  {
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},
    10: {},
    11: {},
    12: {},
    13: {},
    14: {},
    15: {},
    16: {},
    17: {},
    18: {},
    19: {},
    20: {},
    21: {},
    22: {},
    23: {},
    24: {},
    25: {},
    26: {},
    27: {},
    28: {},
    29: {},
    30: {},
  },
  {
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},
    10: {},
    11: {},
    12: {},
    13: {},
    14: {},
    15: {},
    16: {},
    17: {},
    18: {},
    19: {},
    20: {},
    21: {},
    22: {},
    23: {},
    24: {},
    25: {},
    26: {},
    27: {},
    28: {},
    29: {},
    30: {},
    31: {},
  },
];

module.exports = timetable;
