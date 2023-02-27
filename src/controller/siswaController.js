const SiswaModel = require("../models").siswa

async function loginSiswa(req, res) {
    try {
        const payload = req.body
        const {nisn, nis} = payload
        let siswa = await UserModel.findOne({
            where: {
                nisn
            }
        })
    } catch (error) {
        
    }
}