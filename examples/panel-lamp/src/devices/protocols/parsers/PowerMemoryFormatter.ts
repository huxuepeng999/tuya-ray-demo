/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { transform, generateStep } from './transform';

export default class PowerMemoryFormatter {
  uuid: string;
  defaultValue: {
    version: number;
    mode: number;
    hue: number;
    saturation: number;
    value: number;
    brightness: number;
    temperature: number;
  };

  constructor(uuid = 'power_memory', defaultValue = null) {
    this.defaultValue = {
      version: 0,
      mode: 0,
      hue: 0,
      saturation: 0,
      value: 0,
      brightness: 1000,
      temperature: 1000,
    };
    this.uuid = uuid;
    if (defaultValue) {
      this.defaultValue = defaultValue;
    }
  }

  equal(source, target) {
    return source === target;
  }

  parser(val = '') {
    if (!val) {
      console.log('数据有问题，无法解析', val);
      return this.defaultValue;
    }

    const generator = transform(val);
    generator.next();
    const step2 = generateStep(generator, 2);
    const step4 = generateStep(generator, 4);
    const version = step2();
    const mode = step2();
    const hue = step4();
    const saturation = step4();
    const value = step4();
    const brightness = step4();
    const temperature = step4();
    return {
      version: Number.isNaN(version) ? 0 : version,
      mode: Number.isNaN(mode) ? 0 : mode,
      hue: Number.isNaN(hue) ? 0 : hue,
      saturation: Number.isNaN(saturation) ? 0 : saturation,
      value: Number.isNaN(value) ? 0 : value,
      brightness: Number.isNaN(brightness) ? 0 : brightness,
      temperature: Number.isNaN(temperature) ? 0 : temperature,
    };
  }

  to16(value, length) {
    let result = Number(value).toString(16);
    if (result.length < length) {
      result = result.padStart(length, '0');
    }
    return result;
  }

  formatter(data) {
    // 自定义格式转为16进制
    const { mode, hue, saturation, value, temperature, brightness } = data;
    // console.log('断电记忆format', data);
    const modeStr = this.to16(mode, 2);
    const hueStr = this.to16(hue, 4);
    const satStr = this.to16(saturation, 4);
    const valStr = this.to16(value, 4);
    const tempStr = this.to16(temperature, 4);
    const brightStr = this.to16(brightness, 4);

    return `00${modeStr}${hueStr}${satStr}${valStr}${brightStr}${tempStr}`;
  }
}
