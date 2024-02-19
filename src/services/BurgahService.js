import { fakeDb } from "../db/FakeDb.js"
import { BadRequest } from "../utils/Errors.js"

class BurgahService {
    getSpecificBurgah(burgId) {
        const foundBurgah = fakeDb.burgahs.find(burg => burg.id == burgId)

        if (!foundBurgah) {
            throw new BadRequest('thats no burgah!')
        }
        return foundBurgah
    }


    getBurgahs() {
        const burgs = fakeDb.burgahs
        return burgs
    }



}
export const burgahService = new BurgahService()