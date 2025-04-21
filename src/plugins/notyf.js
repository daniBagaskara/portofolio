// plugins/notyf.js
import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'

// Konfigurasi opsional
const notyf = new Notyf({
    duration: 3000,
    position: {
        x: 'center',
        y: 'top'
    },
    types: [
        {
            type: 'success',
        },
        {
            type: 'error',
            background: '#ef4444' // merah Tailwind
        }
    ]
})

export default notyf
