import multer from 'multer'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import path from 'path'
import mkdirp from 'mkdirp'
import crypto from 'crypto'
import cloudinary from './cloudinary'
import * as dotenv from 'dotenv'

dotenv.config()

const storageTypes = {
  local: (folder) => multer.diskStorage({
    destination: (req, file, cb) => {
      const directory = path.resolve(__dirname, "../../tmp/uploads" + folder)
      mkdirp(directory, (err) => cb(err, directory))
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err)
          cb(err)

        file.id = hash.toString("hex")
        file.key = `${file.id}-${file.originalname}`

        cb(null, file.key)
      })
    }
  }),
  cloudinary: (folder) => new CloudinaryStorage({
    cloudinary,
    params: {
      folder: folder.replace('/', ''),
      public_id: (req, file) => {
        const hash = crypto.randomBytes(16).toString('hex')
        const filename = `${hash}-${file.originalname}`
        file.key = filename

        return filename.split('.').slice(0, -1).join('.')
      }
    }
  })
}

const multerConfig = (folder) => {
  const size = 30 // 30 MB

  return {
    dest: path.resolve(__dirname, "../../tmp/uploads"),
    storage: storageTypes[process.env.STORAGE_TYPE || "local"](folder),
    limits: {
      fileSize: size * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
      const allowedMimes = [
        "image/jpeg",
        "image/jpg",
        "image/pjpeg",
        "image/png",
        "image/webp"
      ]

      if (allowedMimes.includes(file.mimetype)) {
        cb(null, true)
      } else {
        cb(new Error("Nosso sistema não aceita arquivos com extensão " + file.mimetype))
      }
    }
  }
}

export default multerConfig