import AsyncStorage from '@react-native-async-storage/async-storage'
import { PLAYER_COLLECTION, GROUP_COLLECTION } from '@storage/storageConfig'
import { groupsGetAll } from './groupsGetAll'

export async function groupRemoveByName(groupDeleted: string) {
  try {
    const storedGroups = await groupsGetAll()
    const filtered = storedGroups.filter((group) => group !== groupDeleted)
    const groupsWithoutDeletedOne = JSON.stringify(filtered)

    await AsyncStorage.setItem(GROUP_COLLECTION, groupsWithoutDeletedOne)
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`)
  } catch (error) {
    throw error
  }
}
