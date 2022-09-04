import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './EnterStyle'
import DropDownPicker from 'react-native-dropdown-picker';
// import AntDesign from 'react-native-vector-icons/AntDesign';

const Enter = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("uzb");
    const [items, setItems] = useState([
        { label: '+998', value: 'uzb' },
        { label: '+778', value: 'rus' }
    ]);
    return (
        <View style={styles.mainCard}>
            <View>
                <View style={styles.imgCard}>
                    <Image
                        style={styles.pictureLogo}
                        source={require("../../assets/images/Pictures/Group2.png")}
                    />
                </View>


                <View style={styles.inpuCard}>
                    <Text>Введите ваше номер телефона</Text>

                    <View>
                        <Text style={styles.textSecondary}>Номер телефона</Text>
                        <View style={styles.DropdownCard}>
                            <DropDownPicker
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                style={styles.dropdownNumber}
                            />
                            <TextInput
                                placeholder='your number'
                                style={styles.input}
                            />
                            {/* <Text><AntDesign name="closecircle" /></Text> */}
                        </View>
                        <View>
                            <Text style={styles.centeredText}>
                                Зарегистрировавшись, вы соглашаетесь с нашими условиями использовании
                            </Text>
                            <Text style={styles.aText}>
                                Условия использовании
                            </Text>
                            <Text style={styles.aText}>
                                Политика конфидициальности
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.mainButton}  >
                <Text style={styles.mainButtonText}>войти</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Enter