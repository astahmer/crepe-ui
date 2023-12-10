import React from 'react'
import ReactDOM from 'react-dom/client'
import { Sandbox } from './sandbox'
import { ColorModeProvider } from './color-mode'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ColorModeProvider>
			<Sandbox />
		</ColorModeProvider>
	</React.StrictMode>,
)
