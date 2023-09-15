/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { router } from 'ray';
import React, { useEffect, useState } from 'react';
import { hideMenuButton, setNavigationBarColor, showMenuButton, View } from '@ray-js/ray';
import { useStructuredActions } from '@ray-js/panel-sdk';
import { actions, store, useSelector } from '@/redux';
import dpCodes from '@/config/dpCodes';
import Strings from '@/i18n';
import Dimmer from '../../Dimmer';
import { TopBar } from '@/components';
import styles from './index.module.less';
import useThrottleFn from '@/hooks/useThrottleFn';

const { dispatch } = store;
const { brightCode, colourCode, temperatureCode, powerMemoryCode } = dpCodes;

export function CustomColor() {
  const safeArea = useSelector(state => state.cloudState.systemInfo?.safeArea);
  const customColor = useSelector(state => state.uiState.customColor);
  const [newCustomColor, setNewCustomColor] = useState(customColor);
  const dpActions = useStructuredActions();
  useEffect(() => {
    setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: 'transparent',
      animation: {
        duration: 300,
        timingFunc: 'linear',
      },
    });
    hideMenuButton();
    return () => {
      showMenuButton();
    };
  }, []);
  const backToHome = () => {
    router.back();
  };

  const handleColorRelease = (key: string, value: any) => {
    let result;
    if (key === colourCode) {
      result = { ...newCustomColor, ...value };
    } else if (key === brightCode) {
      result = { ...newCustomColor, brightness: value };
    } else {
      result = { ...newCustomColor, temperature: value };
    }
    setNewCustomColor(result);
  };
  const handleWhiteRelease = (value: any) => {
    const result = {
      ...newCustomColor,
      brightness: value[brightCode],
      temperature: value[temperatureCode],
    };
    setNewCustomColor(result);
  };
  const handlePowerModeChange = v => {
    // 断电记忆切换白彩光
    setNewCustomColor({ ...newCustomColor, colorMode: +(v === 'colour') });
  };
  const handleSave = () => {
    router.back();
    const { colorMode, hue, saturation, value, brightness, temperature } = newCustomColor;
    let newColor;
    if (colorMode === 0) {
      newColor = { brightness, temperature, hue: 0, saturation: 0, value: 0, colorMode };
    } else {
      newColor = { brightness: 0, temperature: 0, hue, saturation, value, colorMode };
    }
    dispatch(actions.common.updateUi({ customColor: newColor }));
  };
  const handleColorChange = useThrottleFn(
    (isColor, v) => {
      setNewCustomColor({ ...newCustomColor, ...v, mode: isColor ? 1 : 0 });
    },
    { wait: 80 }
  ).run;
  return (
    <View style={{ paddingTop: safeArea?.top * 2 }} className={styles.view}>
      <TopBar
        handleCancel={backToHome}
        cancelType="icon"
        title={Strings.getLang('customMemory')}
        handleSave={handleSave}
      />

      <Dimmer
        canEdit={false}
        style={{ marginTop: 48 }}
        mode={newCustomColor?.colorMode === 0 ? 'white' : 'colour'}
        handleModeChange={handlePowerModeChange}
        colour={{
          hue: newCustomColor?.hue,
          saturation: newCustomColor?.saturation,
          value: newCustomColor?.value,
        }}
        brightness={newCustomColor?.brightness}
        temperature={newCustomColor?.temperature}
        onChange={handleColorChange}
        onRelease={handleColorRelease}
        onReleaseWhite={handleWhiteRelease}
      />
    </View>
  );
}

export default React.memo(CustomColor);
