import type { Project } from '@/types'
import sai from '@/assets/projects/sai.webp'
import naats from '@/assets/projects/naats.webp'
import a022 from '@/assets/projects/a022.webp'
import mcu from '@/assets/projects/mcu.webp'
import ttt from '@/assets/projects/ttt.webp'
import siga from '@/assets/projects/siga.webp'

export const projects: Project[] = [
    {
        name: 'SAI',
        type: 'Website',
        url: 'https://saipv.info',
        image: sai.src
    },
    {
        name: 'Naats',
        type: 'Website',
        url: 'https://naats.vercel.app',
        image: naats.src
    },
    {
        name: 'Chess 022',
        type: 'Website',
        url: 'https://a022.vercel.app',
        image: a022.src
    },
    {
        name: 'Next MCU',
        type: 'Website',
        url: 'https://nmcu.vercel.app',
        image: mcu.src
    },
    {
        name: 'Textest',
        type: 'Webapp',
        url: 'https://ttt-type.vercel.app',
        image: ttt.src
    },
    {
        name: 'SIGA',
        type: 'System',
        image: siga.src
    } /*
    {
        name: 'Chess 022',
        type: 'System'
    },
    {
        name: 'SIGEI',
        type: 'System'
    }*/
]
