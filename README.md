# Sistema de Votación Descentralizado

## Descripción
Este proyecto implementa un sistema de votación descentralizado utilizando Vyper como lenguaje de contratos inteligentes y una interfaz web moderna construida con React y shadcn/ui. El sistema permite a los usuarios votar por propuestas de manera segura y transparente en la blockchain.

## Características Principales
- Contrato inteligente en Vyper para gestión de votos
- Interfaz de usuario moderna y responsiva
- Integración con wallets de Web3
- Sistema de votación seguro y transparente
- Visualización en tiempo real de resultados

## Tecnologías Utilizadas

### Smart Contracts
- **Vyper**: Lenguaje de programación para contratos inteligentes
  - Sintaxis clara y legible
  - Seguridad por diseño
  - Tipado estático
  - Manejo de eventos integrado
  - Optimización de gas

### Frontend
- React + TypeScript
- shadcn/ui para componentes de interfaz
- wagmi para integración con Web3
- Vite como bundler

## Estructura del Proyecto
```
.
├── contracts/          # Contratos inteligentes en Vyper
├── client/            # Aplicación frontend
│   ├── src/
│   │   ├── components/  # Componentes React
│   │   └── lib/        # Utilidades y configuraciones
└── scripts/           # Scripts de despliegue y pruebas
```

## Características de Vyper

### 1. Seguridad y Simplicidad
- Sintaxis clara y explícita
- Sin operadores de sobrecarga
- Manejo estricto de tipos
- Prevención de desbordamientos

### 2. Estructuras de Datos
- Uso de `struct` para organizar datos
- Mapeos (`HashMap`) para almacenamiento eficiente
- Arrays dinámicos para propuestas

### 3. Eventos
- Sistema de eventos para tracking de votos
- Índices para búsqueda eficiente
- Logging de transacciones

### 4. Funciones y Decoradores
- `@external` para funciones públicas
- `@view` para funciones de solo lectura
- `@deploy` para el constructor

## Instalación

### Requisitos Previos
- Python 3.8+
- Node.js 16+
- MetaMask u otra wallet compatible

### Pasos de Instalación

1. Clonar el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd voting-system
```

2. Configurar el entorno virtual:
```bash
python -m venv .venv
source .venv/bin/activate  # En Windows: .venv\Scripts\activate
```

3. Instalar dependencias del backend:
```bash
pip install -r requirements.txt
```

4. Instalar dependencias del frontend:
```bash
cd client
npm install
```

## Uso

1. Desplegar el contrato:
```bash
ape run scripts/deploy.py
```

2. Iniciar el frontend:
```bash
cd client
npm run dev
```

3. Conectar tu wallet y comenzar a votar

## Contribución
Las contribuciones son bienvenidas. Por favor, asegúrate de:
1. Hacer fork del proyecto
2. Crear una rama para tu feature
3. Enviar un pull request

## Licencia
Este proyecto está bajo la Licencia MIT.

## Contacto
[https://x.com/rabuawad_](https://x.com/rabuawad_)
