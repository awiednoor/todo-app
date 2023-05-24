import React from 'react';
import { HiChartPie, HiViewBoards, HiInbox } from 'react-icons/hi';
import { Sidebar, Navbar, Dropdown, Avatar, Button } from 'flowbite-react';

function Layout({ children }) {
  return (
    <div className="w-full">
      <Navbar fluid={true} className="h-full">
        <Navbar.Brand href="https://flowbite.com/">
          <div className="mx-2">
            <Button gradientDuoTone="purpleToBlue">☁️</Button>
          </div>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Todo App
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      </Navbar>

      <div className="flex h-full w-full">
        <div className="flex flex-grow h-full">
          <div className="flex flex-col h-full">
            <Sidebar
              aria-label="Default sidebar example"
              className="h-full m-0"
            >
              <Sidebar.Items>
                <Sidebar.ItemGroup>
                  <Sidebar.Item href="#" icon={HiChartPie} label="7">
                    Project_1
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiViewBoards} label="5">
                    Project_2
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiInbox} label="3">
                    Project_3
                  </Sidebar.Item>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </Sidebar>
          </div>
          <div className="flex flex-col flex-grow h-full bg-gray-200 p-8">
            {/* Dashboard content goes here */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
