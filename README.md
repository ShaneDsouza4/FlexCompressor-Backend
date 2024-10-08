# FlexCompressor - Dynamic Data Compression System

## Introduction

The **FlexCompressor** is designed to enhance storage efficiency and optimize data retrieval processes through adaptive compression techniques. This project leverages real-time performance metrics and user-driven compression choices to handle data more effectively. The system is exemplified through a ticket management application, simulating real-world use cases where data compression can significantly reduce storage costs and improve operational efficiency.

## Features

- **Adaptive Compression**: Automatically selects the most suitable compression algorithm (Brotli, LZMA, ZSTD) based on document access frequency, ensuring optimal storage and retrieval efficiency.
- **Real-Time Monitoring**: Provides real-time tracking and averaging of compression metrics such as size, time, and decompression duration, facilitating performance monitoring and analysis.
- **User-Controlled Compression**: Users can manually trigger ZSTD compression for specific data, offering flexibility and control over data management.
- **Automated Data Archiving**: Implements an automated scheduling system to archive tickets older than one month, freeing up active storage while preserving data integrity.

## Technologies Used

- **React**: For providing a seamless and dynamic user interface for interacting with the backend services.
- **Node.js**: For the server-side logic and API development.
- **Express.js**: As the web framework for building RESTful APIs.
- **MongoDB**: A NoSQL database used to store and manage ticket data efficiently.
- **Compression Libraries**: 
  - **Brotli**: For high compression ratios with moderate speed.
  - **LZMA**: For maximum compression, typically used for less frequently accessed data.
  - **ZSTD**: For balancing compression speed and ratio, ideal for frequently accessed data.
- **Cron Jobs**: For automating the data archiving process.

## Frontend

The frontend interface for this system is available at [here](https://github.com/tusharkaran/ADT_frontend). It provides an intuitive user experience for managing tickets and interacting with the compression system.

## Screenshots
![Dashboard](https://github.com/user-attachments/assets/989af96d-a32a-4aee-9592-6917be6c267f)

![Active Tickets](https://github.com/user-attachments/assets/f680a97c-0fc1-4369-afe8-69e2868874e9)

![Archived Tickets](https://github.com/user-attachments/assets/d72d7a2c-234d-4d3c-a6c6-d70d0d9b785a)
