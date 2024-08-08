
export type IProject = {
    id: number;
    title: string;
    img?: string
    description: string
    url: string
    active: boolean | number
  }[]

export const dataProjects: IProject = [
    {
      id: 1,
      title: 'Frontend: Solución de Software para transporte de pasajeros',
      img: 'images/projects/frontend.png',
      description: 'Frontend Sistema de administrador para ingreso de información de servicio de transporte intercantonal e interprovincial en Ecuador. Desarrollado en Angular',
      url: 'https://github.com/wf-farez/frontend_transporte',
      active: 1
    },
  
    {
      id: 2,
      title: 'Backend: Solución de Software para transporte de pasajeros',
      img: 'images/projects/frontend.png',
      description: 'Backend Sistema de administrador para ingreso de informacion de servicio de transporte intercantonal e interprovincial en Ecuador. Desarrollo en Spring. Base de Datos Postgres',
      url: 'https://github.com/wf-farez/backend_transporte',
      active: 1
    }
    
  ]