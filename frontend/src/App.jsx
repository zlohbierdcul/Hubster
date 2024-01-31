import { useEffect } from 'react';
import './App.css';

function App() {
    useEffect(() => {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const changeTheme = () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    };

    return (
        <>
            <button
                className='absolute p-2 top-0 right-0 dark:text-text-dark text-text-light text-base '
                onClick={changeTheme}
            >
                change mode
            </button>
            <div className='justify-center flex flex-col items-center font-bold text-xl'>
                <p className='dark:text-text-dark text-text-light h-16 pt-4'>
                    Hubster
                </p>
                <div className='grid grid-cols-3 gap-6 h-32 justify-items-center items-center'>
                    <div className='rounded p-2 dark:bg-primary-dark bg-primary-light dark:text-text-dark text-text-light'>
                        Primary
                    </div>
                    <div className='rounded p-2 dark:bg-secondary-dark bg-secondary-light dark:text-text-dark text-text-light'>
                        Secondary
                    </div>
                    <div className='rounded p-2 dark:bg-accent-dark bg-accent-light dark:text-text-dark text-text-light'>
                        Accent
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
