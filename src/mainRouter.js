import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './view/home';
import ReportView from './view/reports';
import AnalyticsView from './view/analytics';
import withErrorBoundary from './component/errorhandler';

function MainRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/reports" element={<ReportView />}></Route>
                <Route path="/analytics" element={<AnalyticsView />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default withErrorBoundary(MainRoutes);
