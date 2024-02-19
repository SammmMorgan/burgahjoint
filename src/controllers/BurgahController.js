import { fakeDb } from "../db/FakeDb.js";
import { burgahService } from "../services/BurgahService.js";
import BaseController from "../utils/BaseController.js";

export class BurgahController extends BaseController {
    constructor() {
        super('api/burgahs')
        this.router.get('', this.getBurgahs).get('/:burgahId', this.getBurgahById)
    }

    /**
     * Sends all values back to the client
     * @param {import("express").Request} request
     * @param {import("express").Response} response
     * @param {import("express").NextFunction} next
    */
    getBurgahs(request, response, next) {
        // response.send('gaming')
        try {
            const burgs = burgahService.getBurgahs()
            response.send(burgs)
        } catch (error) {
            next(error)
        }
    }
    /**
     * Sends all values back to the client
     * @param {import("express").Request} request
     * @param {import("express").Response} response
     * @param {import("express").NextFunction} next
    */

    getBurgahById(request, response, next) {
        try {
            const burgahId = request.params.burgahId
            const burgah = burgahService.getSpecificBurgah(burgahId)
            response.send(burgah)
        } catch (error) {
            next(error)
        }

    }


}