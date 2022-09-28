import React from 'react';
import WidgetBox from '../../components/Widgets/WidgetBox';
import SidebarComp from '../../components/Layout/SidebarComp';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    let dashboardWidgets = [
        {
            "name": "Chat Application",
            "startCoor": [0,0],
            "endCoor": [1,1],
            "data": {}
        },
        {
            "name": "Vendor List",
            "startCoor": [0,2],
            "endCoor": [1,2],
            "data": {}
        },
        {
            "name": "Mortgage Amortization",
            "startCoor": [0,3],
            "endCoor": [1,3],
            "data": {}
        },
        {
            "name": "Properties",
            "startCoor": [2,0],
            "endCoor": [2,3],
            "data": {}
        },
        {
            "name": "Metric 1",
            "startCoor": [3,0],
            "endCoor": [3,0],
            "data": {}
        },
        {
            "name": "Metric 2",
            "startCoor": [3,1],
            "endCoor": [3,1],
            "data": {}
        },
        {
            "name": "Metric 3",
            "startCoor": [3,2],
            "endCoor": [3,2],
            "data": {}
        },
        {
            "name": "Metric 4",
            "startCoor": [3,3],
            "endCoor": [3,3],
            "data": {}
        }
    ]

    let dashStyles = styles.widgetContainer;

    return(
        <div className='flex flex-row font-sans'>
            <div className='min-w-200'><SidebarComp></SidebarComp></div>
            <main className={dashStyles}>
                    {dashboardWidgets.map((widget, idx) => {
                        return <WidgetBox title={widget.name} stat={widget.content} key={idx} startCoor={widget.startCoor} endCoor={widget.endCoor}/>
                    })}
            </main>
        </div>
    )
}

export default Dashboard;