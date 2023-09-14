import _ from 'lodash-es';
import { GetSmartDeviceModelDpSchema } from '@ray-js/panel-sdk';

export const lampSchema = [
  {
    attr: 1537,
    canTrigger: true,
    code: 'switch_led',
    defaultRecommend: true,
    editPermission: true,
    executable: true,
    extContent: '',
    iconname: 'icon-dp_power',
    id: 1,
    mode: 'rw',
    name: '开关',
    property: {
      type: 'bool',
    },
    type: 'obj',
  },
  {
    attr: 1536,
    canTrigger: true,
    code: 'work_mode',
    defaultRecommend: true,
    editPermission: true,
    executable: true,
    extContent: '',
    iconname: 'icon-dp_mode',
    id: 2,
    mode: 'rw',
    name: '模式',
    property: {
      range: ['white', 'colour', 'scene', 'music'],
      type: 'enum',
    },
    type: 'obj',
  },
  {
    attr: 1536,
    canTrigger: true,
    code: 'bright_value',
    defaultRecommend: true,
    editPermission: true,
    executable: true,
    extContent: '',
    iconname: 'icon-liangdu1',
    id: 3,
    mode: 'rw',
    name: '亮度值',
    property: {
      min: 10,
      max: 1000,
      scale: 0,
      step: 1,
      type: 'value',
    },
    type: 'obj',
  },
  {
    attr: 1536,
    canTrigger: true,
    code: 'temp_value',
    defaultRecommend: true,
    editPermission: true,
    executable: true,
    extContent: '',
    iconname: 'icon-dp_half',
    id: 4,
    mode: 'rw',
    name: '冷暖值',
    property: {
      min: 0,
      max: 1000,
      scale: 0,
      step: 1,
      type: 'value',
    },
    type: 'obj',
  },
  {
    attr: 1536,
    canTrigger: true,
    code: 'colour_data',
    defaultRecommend: true,
    editPermission: true,
    executable: true,
    extContent: '',
    iconname: 'icon-yanse',
    id: 5,
    mode: 'rw',
    name: '彩光',
    property: {
      type: 'string',
      maxlen: 255,
    },
    type: 'obj',
  },
  {
    attr: 1024,
    canTrigger: true,
    code: 'scene_data',
    defaultRecommend: false,
    editPermission: true,
    executable: true,
    extContent: '',
    iconname: 'icon-shoucang',
    id: 6,
    mode: 'rw',
    name: '场景',
    property: {
      type: 'string',
      maxlen: 255,
    },
    type: 'obj',
  },
  {
    attr: 1536,
    canTrigger: true,
    code: 'countdown',
    defaultRecommend: true,
    editPermission: true,
    executable: true,
    extContent: '',
    iconname: 'icon-a_nav_timer',
    id: 7,
    mode: 'rw',
    name: '倒计时剩余时间',
    property: {
      unit: 's',
      min: 0,
      max: 86400,
      scale: 0,
      step: 1,
      type: 'value',
    },
    type: 'obj',
  },
  {
    attr: 1024,
    canTrigger: true,
    code: 'music_data',
    defaultRecommend: false,
    editPermission: true,
    executable: true,
    extContent: '',
    iconname: 'icon-dp_mic',
    id: 8,
    mode: 'wr',
    name: '音乐灯',
    property: {
      type: 'string',
      maxlen: 255,
    },
    type: 'obj',
  },
  {
    attr: 1152,
    canTrigger: true,
    code: 'music_data_raw',
    defaultRecommend: false,
    editPermission: true,
    executable: true,
    extContent: '',
    iconname: 'icon-dp_mic',
    id: 13,
    mode: 'rw',
    name: '音乐灯(数据压缩)',
    property: {
      type: 'raw',
      maxlen: 255,
    },
    type: 'raw',
  },
  {
    attr: 1152,
    canTrigger: true,
    code: 'scene_data_zip',
    defaultRecommend: false,
    editPermission: true,
    executable: true,
    extContent: '',
    iconname: 'icon-shoucang',
    id: 15,
    mode: 'rw',
    name: '场景（数据压缩）',
    property: {
      type: 'raw',
      maxlen: 255,
    },
    type: 'raw',
  },
  {
    attr: 1024,
    canTrigger: true,
    code: 'sleep_mode',
    defaultRecommend: false,
    editPermission: true,
    executable: true,
    extContent: '',
    iconname: 'icon-dp_sleep',
    id: 31,
    mode: 'rw',
    name: '入睡',
    property: {
      type: 'raw',
      maxlen: 255,
    },
    type: 'raw',
  },
  {
    attr: 1024,
    canTrigger: true,
    code: 'wakeup_mode',
    defaultRecommend: false,
    editPermission: true,
    executable: true,
    extContent: '',
    iconname: 'icon-dp_sun',
    id: 32,
    mode: 'rw',
    name: '唤醒',
    property: {
      type: 'raw',
      maxlen: 255,
    },
    type: 'raw',
  },
  {
    attr: 1664,
    canTrigger: true,
    code: 'power_memory',
    defaultRecommend: true,
    editPermission: true,
    executable: true,
    extContent: '',
    iconname: 'icon-dp_lightning',
    id: 33,
    mode: 'rw',
    name: '断电记忆',
    property: {
      type: 'raw',
      maxlen: 255,
    },
    type: 'raw',
  },
  {
    attr: 1664,
    canTrigger: true,
    code: 'do_not_disturb',
    defaultRecommend: true,
    editPermission: true,
    executable: true,
    extContent: '',
    iconname: 'icon-dp_sleep',
    id: 34,
    mode: 'rw',
    name: '勿扰模式',
    property: {
      type: 'bool',
    },
    type: 'obj',
  },
  {
    attr: 0,
    canTrigger: true,
    code: 'switch_gradient',
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: '',
    iconname: 'icon-dp_mode',
    id: 35,
    mode: 'rw',
    name: '开关渐变',
    property: {
      type: 'raw',
      maxlen: 128,
    },
    type: 'raw',
  },
  {
    attr: 0,
    canTrigger: true,
    code: 'rtc_timer',
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: '',
    iconname: 'icon-dp_time3',
    id: 37,
    mode: 'rw',
    name: 'Rtc定时',
    property: {
      type: 'raw',
      maxlen: 128,
    },
    type: 'raw',
  },
  {
    attr: 0,
    canTrigger: true,
    code: 'timer_report',
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: '',
    iconname: 'icon-zhuangtai',
    id: 38,
    mode: 'rw',
    name: '定时状态上报',
    property: {
      type: 'raw',
      maxlen: 128,
    },
    type: 'raw',
  },
  {
    attr: 0,
    canTrigger: true,
    code: 'random_timing',
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: '',
    iconname: 'icon-dp_time3',
    id: 210,
    mode: 'rw',
    name: '灯光看家',
    property: {
      type: 'raw',
      maxlen: 128,
    },
    type: 'raw',
  },
] as const;

export const lampSchemaMap = _.keyBy(lampSchema, 'code') as GetSmartDeviceModelDpSchema<
  typeof lampSchema
>;
