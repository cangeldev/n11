import { View, Text, Switch } from 'react-native'
import React, { useState } from 'react'
import { FocusAwareStatusBar } from 'components'
import colors from 'assets/colors/colors'
import style from './style'
export function NotificationSettingsPages() {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const B = (props) => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>
    return (
        <View>
            <FocusAwareStatusBar
                barStyle="dark-content"
                backgroundColor={colors.white}
            />
            <View style={style.container}>
                <Text style={style.title}>Bildirimleri Aç</Text>
                <Switch style={style.switchs}
                    trackColor={{ false: "#f4f3f4", true: "#c5ebc0" }}
                    thumbColor={isEnabled ? "#3ec731" : "#f4f3f4"}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                <Text style={style.text}>
                    Bildirim izni vererek<B> size özel kampanyalardan, fırsat duyurularından ve sepetteki ürünleriniz ile ilgili hatırlatmalardan </B> haberdar olabilirsiniz.
                </Text>
            </View>
        </View>
    )
}