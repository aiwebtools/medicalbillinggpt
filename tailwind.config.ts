
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				cyberpunk: {
					blue: '#33C3F0',
					purple: '#8B5CF6',
					pink: '#D946EF',
					green: '#10B981',
					dark: '#0A0A0A',
					darker: '#050505',
					light: '#F9FAFB',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 10px rgba(51, 195, 240, 0.5)', 
						background: 'rgba(51, 195, 240, 0.1)'
					},
					'50%': { 
						boxShadow: '0 0 20px rgba(51, 195, 240, 0.8)', 
						background: 'rgba(51, 195, 240, 0.3)'
					},
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(139, 92, 246, 0.5)',
						borderColor: 'rgba(139, 92, 246, 0.5)'
					},
					'50%': { 
						boxShadow: '0 0 20px rgba(139, 92, 246, 0.8)',
						borderColor: 'rgba(139, 92, 246, 0.8)'
					},
				},
				'shimmer': {
					'0%': { backgroundPosition: '-500px 0' },
					'100%': { backgroundPosition: '500px 0' },
				},
				'gradient-xy': {
					'0%, 100%': {
						'background-size': '300% 300%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '300% 300%',
						'background-position': 'right center'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite',
				'shimmer': 'shimmer 3s infinite linear',
				'gradient-xy': 'gradient-xy 15s ease infinite',
				'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
			},
			backgroundImage: {
				'cyber-grid': "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 0h1v1H0zM0 25h1v1H0zM0 50h1v1H0zM0 75h1v1H0zM0 99h1v1H0zM25 0h1v1h-1zM25 25h1v1h-1zM25 50h1v1h-1zM25 75h1v1h-1zM25 99h1v1h-1zM50 0h1v1h-1zM50 25h1v1h-1zM50 50h1v1h-1zM50 75h1v1h-1zM50 99h1v1h-1zM75 0h1v1h-1zM75 25h1v1h-1zM75 50h1v1h-1zM75 75h1v1h-1zM75 99h1v1h-1zM99 0h1v1h-1zM99 25h1v1h-1zM99 50h1v1h-1zM99 75h1v1h-1zM99 99h1v1h-1z' fill='rgba(51,195,240,0.1)'/%3E%3C/svg%3E\")"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
