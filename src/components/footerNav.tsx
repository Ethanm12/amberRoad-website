import Link from 'next/link';

const FooterNav = () => {
    return (
        <footer className='footer-section-container'>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default FooterNav;
