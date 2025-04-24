// import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}} className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
        <h1>Login Success Page</h1>
        <Link to='/login' className="btn btn-light my-5">Logout</Link>
    </div>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Faculty Self-Appraisal System</title>
    <script src="https://cdn.tailwindcss.com/3.4.16"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: { primary: "#4f46e5", secondary: "#6366f1" },
            borderRadius: {
              none: "0px",
              sm: "4px",
              DEFAULT: "8px",
              md: "12px",
              lg: "16px",
              xl: "20px",
              "2xl": "24px",
              "3xl": "32px",
              full: "9999px",
              button: "8px",
            },
          },
        },
      };
    </script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
      rel="stylesheet"
    />
    <style>
      :where([class^="ri-"])::before { content: "\f3c2"; }
      body {
      font-family: 'Inter', sans-serif;
      background-color: #f9fafb;
      }
      input:focus, select:focus, textarea:focus {
      outline: none;
      border-color: #4f46e5;
      }
      input[type="number"]::-webkit-inner-spin-button,
      input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
      }
      .custom-checkbox {
      position: relative;
      cursor: pointer;
      user-select: none;
      }
      .custom-checkbox input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      }
      .checkmark {
      position: relative;
      height: 20px;
      width: 20px;
      background-color: #fff;
      border: 2px solid #d1d5db;
      border-radius: 4px;
      transition: all 0.2s ease;
      }
      .custom-checkbox input:checked ~ .checkmark {
      background-color: #4f46e5;
      border-color: #4f46e5;
      }
      .checkmark:after {
      content: "";
      position: absolute;
      display: none;
      left: 6px;
      top: 2px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      }
      .custom-checkbox input:checked ~ .checkmark:after {
      display: block;
      }
      .custom-switch {
      position: relative;
      display: inline-block;
      width: 44px;
      height: 24px;
      }
      .custom-switch input {
      opacity: 0;
      width: 0;
      height: 0;
      }
      .switch-slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #e5e7eb;
      transition: .4s;
      border-radius: 34px;
      }
      .switch-slider:before {
      position: absolute;
      content: "";
      height: 18px;
      width: 18px;
      left: 3px;
      bottom: 3px;
      background-color: white;
      transition: .4s;
      border-radius: 50%;
      }
      input:checked + .switch-slider {
      background-color: #4f46e5;
      }
      input:checked + .switch-slider:before {
      transform: translateX(20px);
      }
    </style>
  </head>
  <body>
    <div class="flex h-screen overflow-hidden">
      <!-- Sidebar -->
      <div class="hidden md:flex md:flex-shrink-0">
        <div class="flex flex-col w-64 bg-white border-r border-gray-200">
          <div
            class="flex items-center justify-center h-16 px-4 border-b border-gray-200"
          >
            <h1 class="text-xl font-['Pacifico'] text-primary">logo</h1>
          </div>
          <div class="flex flex-col flex-grow px-4 pt-5 pb-4 overflow-y-auto">
            <div class="flex-shrink-0 block">
              <div class="flex items-center">
                <div
                  class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white"
                >
                  <span class="text-sm font-medium">JD</span>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">
                    Rishabh Jain
                  </p>
                  <p class="text-xs font-medium text-gray-500">
                    Computer Science
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-6">
              <nav class="space-y-1">
                <a
                  href="#"
                  class="flex items-center px-4 py-2.5 text-sm font-medium text-white bg-primary rounded"
                >
                  <div class="w-5 h-5 mr-3 flex items-center justify-center">
                    <i class="ri-dashboard-line"></i>
                  </div>
                  Dashboard
                </a>
                <a
                  href="/publication1.html"
                  data-readdy="true"
                  class="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded"
                >
                  <div class="w-5 h-5 mr-3 flex items-center justify-center">
                    <i class="ri-article-line"></i>
                  </div>
                  Publications
                </a>
                <a
                  href="/index.html"
                  class="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded"
                >
                  <div class="w-5 h-5 mr-3 flex items-center justify-center">
                    <i class="ri-calendar-event-line"></i>
                  </div>
                  Events
                </a>
                <a
                  href="/lecture1.html"
                  class="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded"
                >
                  <div class="w-5 h-5 mr-3 flex items-center justify-center">
                    <i class="ri-presentation-line"></i>
                  </div>
                  Lectures
                </a>
                <a
                  href="/dashbord5.html"
                  class="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded"
                >
                  <div class="w-5 h-5 mr-3 flex items-center justify-center">
                    <i class="ri-file-chart-line"></i>
                  </div>
                  Reports
                </a>
                <a
                  href="#"
                  class="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded"
                >
                  <div class="w-5 h-5 mr-3 flex items-center justify-center">
                    <i class="ri-settings-line"></i>
                  </div>
                  Settings
                </a>
              </nav>
            </div>
          </div>
          <div class="flex-shrink-0 p-4 border-t border-gray-200">
            <a href="signup_chatgpt.html" class="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded !rounded-button">
              <div class="w-5 h-5 mr-3 flex items-center justify-center">
                <i class="ri-logout-box-line"></i>
              </div>
              Logout
            </a>
            
          </div>
        </div>
      </div>
      <!-- Main content -->
      <div class="flex flex-col flex-1 overflow-hidden">
        <!-- Top header -->
        <div class="flex-shrink-0 border-b border-gray-200 bg-white">
          <div class="flex items-center justify-between h-16 px-6">
            <div class="flex items-center md:hidden">
              <button
                type="button"
                class="text-gray-500 hover:text-gray-900 focus:outline-none"
              >
                <div class="w-6 h-6 flex items-center justify-center">
                  <i class="ri-menu-line"></i>
                </div>
              </button>
            </div>
            <div class="flex-1 md:ml-0">
              <div class="relative max-w-md w-full">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <div
                    class="w-5 h-5 flex items-center justify-center text-gray-400"
                  >
                    <i class="ri-search-line"></i>
                  </div>
                </div>
                <input
                  type="text"
                  class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:border-primary bg-gray-50"
                  placeholder="Search..."
                />
              </div>
            </div>
            <div class="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                class="p-1 text-gray-500 hover:text-gray-900 focus:outline-none"
              >
                <div class="w-6 h-6 flex items-center justify-center">
                  <i class="ri-notification-3-line"></i>
                </div>
              </button>
              <div class="ml-3 relative">
                <div>
                  <button
                    type="button"
                    class="flex items-center max-w-xs text-sm rounded-full focus:outline-none"
                  >
                    <div
                      class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white"
                    >
                      <span class="text-xs font-medium">JD</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Main content area -->
        <div class="flex-1 overflow-auto">
          <div class="py-6 px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between mb-6">
              <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
              <button
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 !rounded-button whitespace-nowrap"
              >
                <div class="w-4 h-4 mr-2 flex items-center justify-center">
                  <i class="ri-add-line"></i>
                </div>
                Add New Entry
              </button>
            </div>
            <div class="mb-8">
              <div
                class="bg-white shadow rounded-lg p-5 border border-gray-100"
              >
                <div class="flex items-center mb-4">
                  <div
                    class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white"
                  >
                    <span class="text-sm font-medium">JD</span>
                  </div>
                  <div class="ml-4">
                    <h2 class="text-lg font-semibold text-gray-900">
                      Welcome back, Rishabh Jain
                    </h2>
                    <p class="text-sm text-gray-500">
                      Associate Professor, Department of Computer Science
                    </p>
                  </div>
                </div>
                <p class="text-sm text-gray-600">
                  Your academic self-appraisal for the 2024-2025 academic year
                  is in progress. You have completed 67% of the required
                  entries.
                </p>
                <div class="mt-4 w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    class="bg-primary h-2.5 rounded-full"
                    style="width: 67%"
                  ></div>
                </div>
              </div>
            </div>
            <!-- Stats Section -->
            <div
              class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
            >
              <div
                class="bg-white overflow-hidden shadow rounded-lg border border-gray-100"
              >
                <div class="p-5">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 bg-blue-100 rounded-md p-3">
                      <div
                        class="w-6 h-6 flex items-center justify-center text-blue-600"
                      >
                        <i class="ri-article-line"></i>
                      </div>
                    </div>
                    <div class="ml-5 w-0 flex-1">
                      <dl>
                        <dt class="text-sm font-medium text-gray-500 truncate">
                          Publications
                        </dt>
                        <dd>
                          <div class="text-lg font-semibold text-gray-900">
                            12
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-5 py-3">
                  <div class="text-sm">
                    <a
                      href="#"
                      class="font-medium text-primary hover:text-primary/90"
                      >View all</a
                    >
                  </div>
                </div>
              </div>
              <div
                class="bg-white overflow-hidden shadow rounded-lg border border-gray-100"
              >
                <div class="p-5">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 bg-green-100 rounded-md p-3">
                      <div
                        class="w-6 h-6 flex items-center justify-center text-green-600"
                      >
                        <i class="ri-calendar-event-line"></i>
                      </div>
                    </div>
                    <div class="ml-5 w-0 flex-1">
                      <dl>
                        <dt class="text-sm font-medium text-gray-500 truncate">
                          Events
                        </dt>
                        <dd>
                          <div class="text-lg font-semibold text-gray-900">
                            8
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-5 py-3">
                  <div class="text-sm">
                    <a
                      href="#"
                      class="font-medium text-primary hover:text-primary/90"
                      >View all</a
                    >
                  </div>
                </div>
              </div>
              <div
                class="bg-white overflow-hidden shadow rounded-lg border border-gray-100"
              >
                <div class="p-5">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 bg-yellow-100 rounded-md p-3">
                      <div
                        class="w-6 h-6 flex items-center justify-center text-yellow-600"
                      >
                        <i class="ri-presentation-line"></i>
                      </div>
                    </div>
                    <div class="ml-5 w-0 flex-1">
                      <dl>
                        <dt class="text-sm font-medium text-gray-500 truncate">
                          Lectures
                        </dt>
                        <dd>
                          <div class="text-lg font-semibold text-gray-900">
                            24
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-5 py-3">
                  <div class="text-sm">
                    <a
                      href="#"
                      class="font-medium text-primary hover:text-primary/90"
                      >View all</a
                    >
                  </div>
                </div>
              </div>
              <div
                class="bg-white overflow-hidden shadow rounded-lg border border-gray-100"
              >
                <div class="p-5">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 bg-red-100 rounded-md p-3">
                      <div
                        class="w-6 h-6 flex items-center justify-center text-red-600"
                      >
                        <i class="ri-time-line"></i>
                      </div>
                    </div>
                    <div class="ml-5 w-0 flex-1">
                      <dl>
                        <dt class="text-sm font-medium text-gray-500 truncate">
                          Pending Approvals
                        </dt>
                        <dd>
                          <div class="text-lg font-semibold text-gray-900">
                            3
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-5 py-3">
                  <div class="text-sm">
                    <a
                      href="#"
                      class="font-medium text-primary hover:text-primary/90"
                      >View all</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- Performance Chart -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
              <div
                class="bg-white shadow rounded-lg border border-gray-100 lg:col-span-2"
              >
                <div class="p-5">
                  <h3 class="text-lg font-semibold text-gray-900 mb-4">
                    Academic Performance
                  </h3>
                  <div id="performance-chart" style="height: 300px;"></div>
                </div>
              </div>
              <div class="bg-white shadow rounded-lg border border-gray-100">
                <div class="p-5">
                  <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-semibold text-gray-900">
                      Recent Activities
                    </h3>
                    <button class="text-sm text-primary hover:text-primary/90">
                      View all
                    </button>
                  </div>
                  <div class="space-y-4">
                    <div class="flex">
                      <div class="flex-shrink-0">
                        <div
                          class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"
                        >
                          <div class="w-4 h-4 flex items-center justify-center">
                            <i class="ri-article-line"></i>
                          </div>
                        </div>
                      </div>
                      <div class="ml-4">
                        <p class="text-sm font-medium text-gray-900">
                          New publication added
                        </p>
                        <p class="text-xs text-gray-500">Apr 1, 2025</p>
                      </div>
                    </div>
                    <div class="flex">
                      <div class="flex-shrink-0">
                        <div
                          class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600"
                        >
                          <div class="w-4 h-4 flex items-center justify-center">
                            <i class="ri-calendar-event-line"></i>
                          </div>
                        </div>
                      </div>
                      <div class="ml-4">
                        <p class="text-sm font-medium text-gray-900">
                          Conference attendance approved
                        </p>
                        <p class="text-xs text-gray-500">Mar 28, 2025</p>
                      </div>
                    </div>
                    <div class="flex">
                      <div class="flex-shrink-0">
                        <div
                          class="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600"
                        >
                          <div class="w-4 h-4 flex items-center justify-center">
                            <i class="ri-presentation-line"></i>
                          </div>
                        </div>
                      </div>
                      <div class="ml-4">
                        <p class="text-sm font-medium text-gray-900">
                          Guest lecture updated
                        </p>
                        <p class="text-xs text-gray-500">Mar 25, 2025</p>
                      </div>
                    </div>
                    <div class="flex">
                      <div class="flex-shrink-0">
                        <div
                          class="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600"
                        >
                          <div class="w-4 h-4 flex items-center justify-center">
                            <i class="ri-file-chart-line"></i>
                          </div>
                        </div>
                      </div>
                      <div class="ml-4">
                        <p class="text-sm font-medium text-gray-900">
                          Quarterly report submitted
                        </p>
                        <p class="text-xs text-gray-500">Mar 20, 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Recent Entries -->
            <div class="bg-white shadow rounded-lg border border-gray-100 mb-8">
              <div class="px-5 py-4 border-b border-gray-200">
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-semibold text-gray-900">
                    Recent Entries
                  </h3>
                  <div class="flex space-x-2">
                    <div class="relative">
                      <button
                        class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 !rounded-button whitespace-nowrap"
                      >
                        <div
                          class="w-4 h-4 mr-2 flex items-center justify-center"
                        >
                          <i class="ri-filter-line"></i>
                        </div>
                        Filter
                      </button>
                    </div>
                    <button
                      class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 !rounded-button whitespace-nowrap"
                    >
                      <div
                        class="w-4 h-4 mr-2 flex items-center justify-center"
                      >
                        <i class="ri-download-line"></i>
                      </div>
                      Export
                    </button>
                  </div>
                </div>
              </div>
              <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm font-medium text-gray-900">
                          Machine Learning
                          Technology
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-500">Publication</div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-500">Apr 1, 2025</div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span
                          class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                          >Approved</span
                        >
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >
                        <div class="flex space-x-2">
                          <button class="text-primary hover:text-primary/90">
                            <div
                              class="w-5 h-5 flex items-center justify-center"
                            >
                              <i class="ri-eye-line"></i>
                            </div>
                          </button>
                          <button class="text-gray-500 hover:text-gray-700">
                            <div
                              class="w-5 h-5 flex items-center justify-center"
                            >
                              <i class="ri-edit-line"></i>
                            </div>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm font-medium text-gray-900">
                          Data structure algorithm
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-500">Event</div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-500">Mar 28, 2025</div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span
                          class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                          >Approved</span
                        >
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >
                        <div class="flex space-x-2">
                          <button class="text-primary hover:text-primary/90">
                            <div
                              class="w-5 h-5 flex items-center justify-center"
                            >
                              <i class="ri-eye-line"></i>
                            </div>
                          </button>
                          <button class="text-gray-500 hover:text-gray-700">
                            <div
                              class="w-5 h-5 flex items-center justify-center"
                            >
                              <i class="ri-edit-line"></i>
                            </div>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm font-medium text-gray-900">
                          block chain technology
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-500">Lecture</div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-500">Mar 25, 2025</div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span
                          class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800"
                          >Pending</span
                        >
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >
                        <div class="flex space-x-2">
                          <button class="text-primary hover:text-primary/90">
                            <div
                              class="w-5 h-5 flex items-center justify-center"
                            >
                              <i class="ri-eye-line"></i>
                            </div>
                          </button>
                          <button class="text-gray-500 hover:text-gray-700">
                            <div
                              class="w-5 h-5 flex items-center justify-center"
                            >
                              <i class="ri-edit-line"></i>
                            </div>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm font-medium text-gray-900">
                          Ethical hacking
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-500">Publication</div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-500">Mar 20, 2025</div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span
                          class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"
                          >Rejected</span
                        >
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >
                        <div class="flex space-x-2">
                          <button class="text-primary hover:text-primary/90">
                            <div
                              class="w-5 h-5 flex items-center justify-center"
                            >
                              <i class="ri-eye-line"></i>
                            </div>
                          </button>
                          <button class="text-gray-500 hover:text-gray-700">
                            <div
                              class="w-5 h-5 flex items-center justify-center"
                            >
                              <i class="ri-edit-line"></i>
                            </div>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm font-medium text-gray-900">
                          Database managment system
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-500">Lecture</div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-500">Mar 15, 2025</div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span
                          class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                          >Approved</span
                        >
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >
                        <div class="flex space-x-2">
                          <button class="text-primary hover:text-primary/90">
                            <div
                              class="w-5 h-5 flex items-center justify-center"
                            >
                              <i class="ri-eye-line"></i>
                            </div>
                          </button>
                          <button class="text-gray-500 hover:text-gray-700">
                            <div
                              class="w-5 h-5 flex items-center justify-center"
                            >
                              <i class="ri-edit-line"></i>
                            </div>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                class="px-5 py-3 flex items-center justify-between border-t border-gray-200"
              >
                <div class="flex-1 flex justify-between sm:hidden">
                  <button
                    class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 !rounded-button whitespace-nowrap"
                  >
                    Previous
                  </button>
                  <button
                    class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 !rounded-button whitespace-nowrap"
                  >
                    Next
                  </button>
                </div>
                <div
                  class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
                >
                  <div>
                    <p class="text-sm text-gray-700">
                      Showing <span class="font-medium">1</span> to
                      <span class="font-medium">5</span> of
                      <span class="font-medium">22</span> results
                    </p>
                  </div>
                  <div>
                    <nav
                      class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                      aria-label="Pagination"
                    >
                      <button
                        class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      >
                        <span class="sr-only">Previous</span>
                        <div class="w-5 h-5 flex items-center justify-center">
                          <i class="ri-arrow-left-s-line"></i>
                        </div>
                      </button>
                      <button
                        class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        1
                      </button>
                      <button
                        class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-primary text-sm font-medium text-white"
                      >
                        2
                      </button>
                      <button
                        class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        3
                      </button>
                      <span
                        class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
                        >...</span
                      >
                      <button
                        class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        8
                      </button>
                      <button
                        class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        9
                      </button>
                      <button
                        class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      >
                        <span class="sr-only">Next</span>
                        <div class="w-5 h-5 flex items-center justify-center">
                          <i class="ri-arrow-right-s-line"></i>
                        </div>
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <!-- Quick Links -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div
                class="bg-white shadow rounded-lg border border-gray-100 p-5"
              >
                <div class="flex items-center mb-4">
                  <div
                    class="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center text-blue-600"
                  >
                    <div class="w-6 h-6 flex items-center justify-center">
                      <i class="ri-article-line"></i>
                    </div>
                  </div>
                  <h3 class="ml-3 text-lg font-semibold text-gray-900">
                    Add Publication
                  </h3>
                </div>
                <p class="text-sm text-gray-600 mb-4">
                  Record your research papers, journal articles, and book
                  chapters.
                </p>
                <button
                  class="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 !rounded-button whitespace-nowrap"
                >
                  Get Started
                </button>
              </div>
              <div
                class="bg-white shadow rounded-lg border border-gray-100 p-5"
              >
                <div class="flex items-center mb-4">
                  <div
                    class="w-10 h-10 rounded-md bg-green-100 flex items-center justify-center text-green-600"
                  >
                    <div class="w-6 h-6 flex items-center justify-center">
                      <i class="ri-calendar-event-line"></i>
                    </div>
                  </div>
                  <h3 class="ml-3 text-lg font-semibold text-gray-900">
                    Add Event
                  </h3>
                </div>
                <p class="text-sm text-gray-600 mb-4">
                  Document conferences, workshops, and seminars you've attended.
                </p>
                <button
                  class="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 !rounded-button whitespace-nowrap"
                >
                  Get Started
                </button>
              </div>
              <div
                class="bg-white shadow rounded-lg border border-gray-100 p-5"
              >
                <div class="flex items-center mb-4">
                  <div
                    class="w-10 h-10 rounded-md bg-yellow-100 flex items-center justify-center text-yellow-600"
                  >
                    <div class="w-6 h-6 flex items-center justify-center">
                      <i class="ri-presentation-line"></i>
                    </div>
                  </div>
                  <h3 class="ml-3 text-lg font-semibold text-gray-900">
                    Add Lecture
                  </h3>
                </div>
                <p class="text-sm text-gray-600 mb-4">
                  Record guest lectures, presentations, and teaching activities.
                </p>
                <button
                  class="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 !rounded-button whitespace-nowrap"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/5.5.0/echarts.min.js"></script>
    <script>
      // Initialize performance chart
      const performanceChart = document.getElementById("performance-chart");
      const chart = echarts.init(performanceChart);
      const option = {
        animation: false,
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderColor: "#e5e7eb",
          borderWidth: 1,
          textStyle: {
            color: "#1f2937",
          },
        },
        legend: {
          data: ["Publications", "Events", "Lectures"],
          bottom: 0,
          textStyle: {
            color: "#1f2937",
          },
        },
        grid: {
          left: 0,
          right: 0,
          top: 10,
          bottom: 40,
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Q1", "Q2", "Q3", "Q4"],
          axisLine: {
            lineStyle: {
              color: "#e5e7eb",
            },
          },
          axisLabel: {
            color: "#1f2937",
          },
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              color: "#e5e7eb",
            },
          },
          axisLabel: {
            color: "#1f2937",
          },
        },
        series: [
          {
            name: "Publications",
            type: "line",
            smooth: true,
            symbol: "none",
            lineStyle: {
              width: 3,
              color: "rgba(87, 181, 231, 1)",
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(87, 181, 231, 0.1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(87, 181, 231, 0.01)",
                  },
                ],
              },
            },
            data: [3, 2, 4, 3],
          },
          {
            name: "Events",
            type: "line",
            smooth: true,
            symbol: "none",
            lineStyle: {
              width: 3,
              color: "rgba(141, 211, 199, 1)",
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(141, 211, 199, 0.1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(141, 211, 199, 0.01)",
                  },
                ],
              },
            },
            data: [1, 3, 2, 2],
          },
          {
            name: "Lectures",
            type: "line",
            smooth: true,
            symbol: "none",
            lineStyle: {
              width: 3,
              color: "rgba(251, 191, 114, 1)",
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(251, 191, 114, 0.1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(251, 191, 114, 0.01)",
                  },
                ],
              },
            },
            data: [6, 5, 8, 5],
          },
        ],
      };
      chart.setOption(option);
      // Responsive chart
      window.addEventListener("resize", function () {
        chart.resize();
      });
      // Custom checkbox functionality
      document.querySelectorAll(".custom-checkbox input").forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
          // Add any custom logic here if needed
        });
      });
      // Custom switch functionality
      document.querySelectorAll(".custom-switch input").forEach((switchEl) => {
        switchEl.addEventListener("change", function () {
          // Add any custom logic here if needed
        });
      });
    </script>
  </body>
</html>

  )
}

export default Home