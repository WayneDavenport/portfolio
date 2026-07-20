import { useState, useEffect } from 'react';
import './typography-switcher.css';

const THEMES = [
    {
        id: 'font-dev',
        label: 'Dev',
        display: 'Space Grotesk',
        body: 'Inter',
        cssClass: '',
    },
    {
        id: 'font-geometric',
        label: 'Geo',
        display: 'Syne',
        body: 'Plus Jakarta Sans',
        cssClass: 'font-geometric',
    },
    {
        id: 'font-minimal',
        label: 'Min',
        display: 'Montserrat',
        body: 'Inter',
        cssClass: 'font-minimal',
    },
    {
        id: 'font-glitch',
        label: 'OG',
        display: 'SpecialElite',
        body: 'Inter',
        cssClass: 'font-glitch',
    },
    {
        id: 'font-glitch2',
        label: 'Glitch',
        display: 'Glitch',
        body: 'Inter',
        cssClass: 'font-glitch2',
    },
];

const STORAGE_KEY = 'portfolio-font-theme';

export function TypographySwitcher() {
    const [activeTheme, setActiveTheme] = useState(() => {
        return localStorage.getItem(STORAGE_KEY) || 'font-dev';
    });
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const theme = THEMES.find(t => t.id === activeTheme);
        if (!theme) return;

        // Remove all theme classes then apply the new one
        THEMES.forEach(t => {
            if (t.cssClass) document.documentElement.classList.remove(t.cssClass);
        });
        if (theme.cssClass) document.documentElement.classList.add(theme.cssClass);

        // Also cascade body font
        document.body.style.fontFamily = `var(--font-body)`;

        localStorage.setItem(STORAGE_KEY, activeTheme);
    }, [activeTheme]);

    const current = THEMES.find(t => t.id === activeTheme);

    return (
        <div className={`typo-switcher ${isOpen ? 'open' : ''}`}>
            <button
                className="typo-trigger"
                onClick={() => setIsOpen(o => !o)}
                aria-label="Switch typography"
                data-tooltip="Couldn't decide on a font. I'll just let you pick."
            >
                <span className="typo-trigger-label">Aa</span>
                <span className="typo-trigger-name">{current.display}</span>
            </button>

            {isOpen && (
                <div className="typo-panel">
                    <p className="typo-panel-heading">Typography</p>
                    {THEMES.map(theme => (
                        <button
                            key={theme.id}
                            className={`typo-option ${activeTheme === theme.id ? 'active' : ''}`}
                            onClick={() => { setActiveTheme(theme.id); setIsOpen(false); }}
                        >
                            <span
                                className="typo-option-display"
                                style={{ fontFamily: theme.display }}
                            >
                                {theme.display}
                            </span>
                            <span
                                className="typo-option-body"
                                style={{ fontFamily: theme.body }}
                            >
                                {theme.body}
                            </span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
