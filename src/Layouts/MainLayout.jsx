
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import ScrollTopButton from '../components/ScrollTopButton';

const MainLayout = () => {
    return (
        <div className=''>
            <Navbar />
            <div className="min-h-[calc(100vh-333px)] max-w-screen-xl mx-auto">
            <Outlet />
            </div>
            <Footer />
            <ScrollTopButton />
        </div>
    );
};

export default MainLayout;