import DefaultLayout from "@/layouts/default";
import users from "../public/players_57861.json";
import Link from 'next/link';

import React from "react";
import TableView from "@/components/table";
import { motion } from "framer-motion";

interface Campaign {
  id: number,
  enabled: boolean
}
const campaigns: Campaign[] = [{id: 57861, enabled: true}, {id: 57861, enabled: false}, {id: 57861, enabled: false}, {id: 57861, enabled: false}, {id: 57861, enabled: false}, ]
const delay = 1;

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-full">
        <div style={{ height: "10vh", width: "fit-content" }}>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 130"
            className="item"
            fillRule="evenodd"
            style={{ width: "100%", height: "fit-content", maxHeight: "14vh", backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: "30px", padding: "15px", paddingRight: "5px", paddingBottom: "8px" }}
          >
            <motion.path
              transform="translate(5, 5)"
              scale={0.5}
              d="M 196.1 71.2 L 186.6 71.2 L 186.6 1.2 L 196.1 1.2 L 196.1 31.1 L 230.6 31.1 L 230.6 1.2 L 240.1 1.2 L 240.1 71.2 L 230.6 71.2 L 230.6 39.3 L 196.1 39.3 L 196.1 71.2 Z M 61.3 44.6 L 61.3 1.2 L 70.8 1.2 L 70.8 43.1 A 39.482 39.482 0 0 0 71.2 48.911 Q 72.081 54.819 74.9 58.6 A 13.242 13.242 0 0 0 83.356 63.756 A 20.418 20.418 0 0 0 87.2 64.1 A 21.386 21.386 0 0 0 92.204 63.551 A 13.455 13.455 0 0 0 99.9 58.75 A 17.382 17.382 0 0 0 102.696 53.355 Q 103.486 50.936 103.831 47.994 A 42.042 42.042 0 0 0 104.1 43.1 L 104.1 1.2 L 113.3 1.2 L 113.3 44.2 A 39.957 39.957 0 0 1 112.678 51.431 A 28.663 28.663 0 0 1 110.05 59.35 Q 106.8 65.7 100.95 69.05 A 25.023 25.023 0 0 1 92.389 72.004 A 32.816 32.816 0 0 1 87.2 72.4 A 32.706 32.706 0 0 1 79.195 71.475 A 22.492 22.492 0 0 1 68.2 65.2 Q 62.088 58.823 61.39 47.581 A 48.096 48.096 0 0 1 61.3 44.6 Z M 123.8 65.3 L 128.6 57.3 Q 132.2 60.3 136.7 62.2 A 23.348 23.348 0 0 0 142.07 63.71 A 32.118 32.118 0 0 0 147.2 64.1 A 27.981 27.981 0 0 0 151.747 63.754 Q 154.17 63.354 156.131 62.494 A 13.701 13.701 0 0 0 158.6 61.1 Q 162.648 58.209 162.795 53.366 A 12.116 12.116 0 0 0 162.8 53 A 11.94 11.94 0 0 0 162.463 50.107 A 9.816 9.816 0 0 0 161.6 47.85 A 8.097 8.097 0 0 0 160.4 46.194 Q 159.13 44.813 156.984 43.471 A 25.81 25.81 0 0 0 156.95 43.45 Q 153.834 41.508 148.065 39.28 A 118.584 118.584 0 0 0 146.8 38.8 Q 139.6 36 135.3 33.15 A 21.931 21.931 0 0 1 132.211 30.703 Q 130.494 29.053 129.438 27.188 A 13.303 13.303 0 0 1 129.15 26.65 Q 127.3 23 127.3 18 Q 127.3 13 130.05 8.95 Q 132.8 4.9 138.15 2.45 A 25.558 25.558 0 0 1 144.05 0.615 Q 147.293 0 151.1 0 Q 157.3 0 162.25 1.25 Q 167.2 2.5 171.9 4.8 L 168.4 12.9 A 31.496 31.496 0 0 0 164.274 10.881 A 41.686 41.686 0 0 0 160.45 9.55 Q 155.9 8.2 150.9 8.2 A 27.187 27.187 0 0 0 146.87 8.48 Q 144.738 8.8 143 9.487 A 12.616 12.616 0 0 0 140.5 10.8 A 9.902 9.902 0 0 0 138.337 12.765 A 7.359 7.359 0 0 0 136.7 17.5 A 10.464 10.464 0 0 0 136.992 20.022 A 8.562 8.562 0 0 0 137.8 22.1 Q 138.856 24.019 141.891 25.847 A 23.503 23.503 0 0 0 142.15 26 A 33.003 33.003 0 0 0 144.366 27.172 Q 146.635 28.275 149.846 29.523 A 130.016 130.016 0 0 0 151.9 30.3 A 81.228 81.228 0 0 1 156.878 32.329 Q 161.264 34.3 164.25 36.4 A 26.044 26.044 0 0 1 167.29 38.878 Q 169.513 41.006 170.7 43.35 A 17.579 17.579 0 0 1 172.441 49.213 A 22.155 22.155 0 0 1 172.6 51.9 A 21.71 21.71 0 0 1 171.933 57.401 A 17.105 17.105 0 0 1 169.35 63 Q 166.1 67.6 160.35 70 A 30.521 30.521 0 0 1 152.94 72.004 A 40.027 40.027 0 0 1 147.2 72.4 Q 139.9 72.4 133.9 70.45 A 38.206 38.206 0 0 1 128.533 68.268 A 28.433 28.433 0 0 1 123.8 65.3 Z M 0 65.3 L 4.8 57.3 Q 8.4 60.3 12.9 62.2 A 23.348 23.348 0 0 0 18.27 63.71 A 32.118 32.118 0 0 0 23.4 64.1 A 27.981 27.981 0 0 0 27.947 63.754 Q 30.37 63.354 32.331 62.494 A 13.701 13.701 0 0 0 34.8 61.1 Q 38.848 58.209 38.995 53.366 A 12.116 12.116 0 0 0 39 53 A 11.94 11.94 0 0 0 38.663 50.107 A 9.816 9.816 0 0 0 37.8 47.85 A 8.097 8.097 0 0 0 36.6 46.194 Q 35.33 44.813 33.184 43.471 A 25.81 25.81 0 0 0 33.15 43.45 Q 30.034 41.508 24.265 39.28 A 118.584 118.584 0 0 0 23 38.8 Q 15.8 36 11.5 33.15 A 21.931 21.931 0 0 1 8.411 30.703 Q 6.694 29.053 5.638 27.188 A 13.303 13.303 0 0 1 5.35 26.65 Q 3.5 23 3.5 18 Q 3.5 13 6.25 8.95 Q 9 4.9 14.35 2.45 A 25.558 25.558 0 0 1 20.25 0.615 Q 23.493 0 27.3 0 Q 33.5 0 38.45 1.25 Q 43.4 2.5 48.1 4.8 L 44.6 12.9 A 31.496 31.496 0 0 0 40.474 10.881 A 41.686 41.686 0 0 0 36.65 9.55 Q 32.1 8.2 27.1 8.2 A 27.187 27.187 0 0 0 23.07 8.48 Q 20.938 8.8 19.2 9.487 A 12.616 12.616 0 0 0 16.7 10.8 A 9.902 9.902 0 0 0 14.537 12.765 A 7.359 7.359 0 0 0 12.9 17.5 A 10.464 10.464 0 0 0 13.192 20.022 A 8.562 8.562 0 0 0 14 22.1 Q 15.056 24.019 18.091 25.847 A 23.503 23.503 0 0 0 18.35 26 A 33.003 33.003 0 0 0 20.566 27.172 Q 22.835 28.275 26.046 29.523 A 130.016 130.016 0 0 0 28.1 30.3 A 81.228 81.228 0 0 1 33.078 32.329 Q 37.464 34.3 40.45 36.4 A 26.044 26.044 0 0 1 43.49 38.878 Q 45.713 41.006 46.9 43.35 A 17.579 17.579 0 0 1 48.641 49.213 A 22.155 22.155 0 0 1 48.8 51.9 A 21.71 21.71 0 0 1 48.133 57.401 A 17.105 17.105 0 0 1 45.55 63 Q 42.3 67.6 36.55 70 A 30.521 30.521 0 0 1 29.14 72.004 A 40.027 40.027 0 0 1 23.4 72.4 Q 16.1 72.4 10.1 70.45 A 38.206 38.206 0 0 1 4.733 68.268 A 28.433 28.433 0 0 1 0 65.3 Z M 267.6 71.2 L 258.1 71.2 L 258.1 1.2 L 267.6 1.2 L 267.6 71.2 Z"
              strokeWidth={1}
              initial={{ pathLength: 0, fill: "rgba(255, 255, 255, 0)" }}
              animate={{ pathLength: 1, fill: "rgba(255, 255, 255, 1)" }}
              transition={{
                default: { duration: 4, ease: "easeInOut" },
                fill: { duration: 2, ease: "linear" },
              }}
            />
            <motion.path
              d="M 196.1 71.2 L 186.6 71.2 L 186.6 1.2 L 196.1 1.2 L 196.1 31.1 L 230.6 31.1 L 230.6 1.2 L 240.1 1.2 L 240.1 71.2 L 230.6 71.2 L 230.6 39.3 L 196.1 39.3 L 196.1 71.2 Z M 61.3 44.6 L 61.3 1.2 L 70.8 1.2 L 70.8 43.1 A 39.482 39.482 0 0 0 71.2 48.911 Q 72.081 54.819 74.9 58.6 A 13.242 13.242 0 0 0 83.356 63.756 A 20.418 20.418 0 0 0 87.2 64.1 A 21.386 21.386 0 0 0 92.204 63.551 A 13.455 13.455 0 0 0 99.9 58.75 A 17.382 17.382 0 0 0 102.696 53.355 Q 103.486 50.936 103.831 47.994 A 42.042 42.042 0 0 0 104.1 43.1 L 104.1 1.2 L 113.3 1.2 L 113.3 44.2 A 39.957 39.957 0 0 1 112.678 51.431 A 28.663 28.663 0 0 1 110.05 59.35 Q 106.8 65.7 100.95 69.05 A 25.023 25.023 0 0 1 92.389 72.004 A 32.816 32.816 0 0 1 87.2 72.4 A 32.706 32.706 0 0 1 79.195 71.475 A 22.492 22.492 0 0 1 68.2 65.2 Q 62.088 58.823 61.39 47.581 A 48.096 48.096 0 0 1 61.3 44.6 Z M 123.8 65.3 L 128.6 57.3 Q 132.2 60.3 136.7 62.2 A 23.348 23.348 0 0 0 142.07 63.71 A 32.118 32.118 0 0 0 147.2 64.1 A 27.981 27.981 0 0 0 151.747 63.754 Q 154.17 63.354 156.131 62.494 A 13.701 13.701 0 0 0 158.6 61.1 Q 162.648 58.209 162.795 53.366 A 12.116 12.116 0 0 0 162.8 53 A 11.94 11.94 0 0 0 162.463 50.107 A 9.816 9.816 0 0 0 161.6 47.85 A 8.097 8.097 0 0 0 160.4 46.194 Q 159.13 44.813 156.984 43.471 A 25.81 25.81 0 0 0 156.95 43.45 Q 153.834 41.508 148.065 39.28 A 118.584 118.584 0 0 0 146.8 38.8 Q 139.6 36 135.3 33.15 A 21.931 21.931 0 0 1 132.211 30.703 Q 130.494 29.053 129.438 27.188 A 13.303 13.303 0 0 1 129.15 26.65 Q 127.3 23 127.3 18 Q 127.3 13 130.05 8.95 Q 132.8 4.9 138.15 2.45 A 25.558 25.558 0 0 1 144.05 0.615 Q 147.293 0 151.1 0 Q 157.3 0 162.25 1.25 Q 167.2 2.5 171.9 4.8 L 168.4 12.9 A 31.496 31.496 0 0 0 164.274 10.881 A 41.686 41.686 0 0 0 160.45 9.55 Q 155.9 8.2 150.9 8.2 A 27.187 27.187 0 0 0 146.87 8.48 Q 144.738 8.8 143 9.487 A 12.616 12.616 0 0 0 140.5 10.8 A 9.902 9.902 0 0 0 138.337 12.765 A 7.359 7.359 0 0 0 136.7 17.5 A 10.464 10.464 0 0 0 136.992 20.022 A 8.562 8.562 0 0 0 137.8 22.1 Q 138.856 24.019 141.891 25.847 A 23.503 23.503 0 0 0 142.15 26 A 33.003 33.003 0 0 0 144.366 27.172 Q 146.635 28.275 149.846 29.523 A 130.016 130.016 0 0 0 151.9 30.3 A 81.228 81.228 0 0 1 156.878 32.329 Q 161.264 34.3 164.25 36.4 A 26.044 26.044 0 0 1 167.29 38.878 Q 169.513 41.006 170.7 43.35 A 17.579 17.579 0 0 1 172.441 49.213 A 22.155 22.155 0 0 1 172.6 51.9 A 21.71 21.71 0 0 1 171.933 57.401 A 17.105 17.105 0 0 1 169.35 63 Q 166.1 67.6 160.35 70 A 30.521 30.521 0 0 1 152.94 72.004 A 40.027 40.027 0 0 1 147.2 72.4 Q 139.9 72.4 133.9 70.45 A 38.206 38.206 0 0 1 128.533 68.268 A 28.433 28.433 0 0 1 123.8 65.3 Z M 0 65.3 L 4.8 57.3 Q 8.4 60.3 12.9 62.2 A 23.348 23.348 0 0 0 18.27 63.71 A 32.118 32.118 0 0 0 23.4 64.1 A 27.981 27.981 0 0 0 27.947 63.754 Q 30.37 63.354 32.331 62.494 A 13.701 13.701 0 0 0 34.8 61.1 Q 38.848 58.209 38.995 53.366 A 12.116 12.116 0 0 0 39 53 A 11.94 11.94 0 0 0 38.663 50.107 A 9.816 9.816 0 0 0 37.8 47.85 A 8.097 8.097 0 0 0 36.6 46.194 Q 35.33 44.813 33.184 43.471 A 25.81 25.81 0 0 0 33.15 43.45 Q 30.034 41.508 24.265 39.28 A 118.584 118.584 0 0 0 23 38.8 Q 15.8 36 11.5 33.15 A 21.931 21.931 0 0 1 8.411 30.703 Q 6.694 29.053 5.638 27.188 A 13.303 13.303 0 0 1 5.35 26.65 Q 3.5 23 3.5 18 Q 3.5 13 6.25 8.95 Q 9 4.9 14.35 2.45 A 25.558 25.558 0 0 1 20.25 0.615 Q 23.493 0 27.3 0 Q 33.5 0 38.45 1.25 Q 43.4 2.5 48.1 4.8 L 44.6 12.9 A 31.496 31.496 0 0 0 40.474 10.881 A 41.686 41.686 0 0 0 36.65 9.55 Q 32.1 8.2 27.1 8.2 A 27.187 27.187 0 0 0 23.07 8.48 Q 20.938 8.8 19.2 9.487 A 12.616 12.616 0 0 0 16.7 10.8 A 9.902 9.902 0 0 0 14.537 12.765 A 7.359 7.359 0 0 0 12.9 17.5 A 10.464 10.464 0 0 0 13.192 20.022 A 8.562 8.562 0 0 0 14 22.1 Q 15.056 24.019 18.091 25.847 A 23.503 23.503 0 0 0 18.35 26 A 33.003 33.003 0 0 0 20.566 27.172 Q 22.835 28.275 26.046 29.523 A 130.016 130.016 0 0 0 28.1 30.3 A 81.228 81.228 0 0 1 33.078 32.329 Q 37.464 34.3 40.45 36.4 A 26.044 26.044 0 0 1 43.49 38.878 Q 45.713 41.006 46.9 43.35 A 17.579 17.579 0 0 1 48.641 49.213 A 22.155 22.155 0 0 1 48.8 51.9 A 21.71 21.71 0 0 1 48.133 57.401 A 17.105 17.105 0 0 1 45.55 63 Q 42.3 67.6 36.55 70 A 30.521 30.521 0 0 1 29.14 72.004 A 40.027 40.027 0 0 1 23.4 72.4 Q 16.1 72.4 10.1 70.45 A 38.206 38.206 0 0 1 4.733 68.268 A 28.433 28.433 0 0 1 0 65.3 Z M 267.6 71.2 L 258.1 71.2 L 258.1 1.2 L 267.6 1.2 L 267.6 71.2 Z"
              strokeWidth={1}
              stroke="black"
              initial={{ pathLength: 0, fill: "rgba(0, 0, 0, 0)" }}
              animate={{ pathLength: 1, fill: "rgba(0, 0, 0, 1)" }}
              transition={{
                default: { duration: 4, ease: "easeInOut" },
                fill: { duration: 2, ease: "linear" },
              }}
            />
            <motion.path
              transform="translate(83, 88)"
              d="M 158.701 18.25 L 158.701 35.7 L 154.351 35.7 L 154.351 18.55 Q 154.351 13.067 150.015 12.245 A 8.944 8.944 0 0 0 148.351 12.1 A 12.377 12.377 0 0 0 146.181 12.276 Q 145.007 12.486 144.107 12.944 A 5.004 5.004 0 0 0 142.201 14.6 Q 140.501 17.1 140.501 21.8 L 140.501 35.7 L 136.101 35.7 L 136.101 8.9 L 139.651 8.9 L 140.301 12.55 L 140.551 12.55 Q 141.851 10.45 144.151 9.425 Q 146.451 8.4 149.001 8.4 A 15.798 15.798 0 0 1 151.755 8.624 Q 153.246 8.889 154.422 9.465 A 7.312 7.312 0 0 1 156.251 10.725 A 6.925 6.925 0 0 1 157.925 13.31 Q 158.355 14.428 158.547 15.825 A 17.904 17.904 0 0 1 158.701 18.25 Z M 0.051 34.5 L 0.051 30.5 Q 1.426 31.188 3.299 31.783 A 34.191 34.191 0 0 0 3.926 31.975 Q 6.201 32.65 8.551 32.65 A 16.539 16.539 0 0 0 10.244 32.57 Q 12.311 32.356 13.401 31.575 A 3.718 3.718 0 0 0 14.386 30.56 Q 14.882 29.783 14.9 28.774 A 4.268 4.268 0 0 0 14.901 28.7 Q 14.901 27.7 14.351 26.9 A 3.437 3.437 0 0 0 13.869 26.35 Q 13.311 25.825 12.376 25.3 A 17.241 17.241 0 0 0 11.365 24.78 Q 10.122 24.188 8.301 23.5 A 49.877 49.877 0 0 1 6.456 22.75 Q 5.007 22.125 3.851 21.5 A 9.893 9.893 0 0 1 2.395 20.548 A 7.208 7.208 0 0 1 1.001 19.1 Q 0.057 17.779 0.004 15.746 A 9.387 9.387 0 0 1 0.001 15.5 A 6.617 6.617 0 0 1 0.441 13.037 Q 1.059 11.481 2.546 10.409 A 7.653 7.653 0 0 1 2.776 10.25 A 10.248 10.248 0 0 1 5.869 8.892 Q 7.207 8.538 8.782 8.439 A 20.146 20.146 0 0 1 10.051 8.4 A 22.408 22.408 0 0 1 12.986 8.586 A 18.804 18.804 0 0 1 14.626 8.875 A 20.14 20.14 0 0 1 18.104 9.981 A 18.371 18.371 0 0 1 18.601 10.2 L 17.101 13.7 Q 15.401 13 13.551 12.5 Q 11.701 12 9.751 12 A 13.445 13.445 0 0 0 8.26 12.077 Q 6.628 12.26 5.626 12.875 Q 4.201 13.75 4.201 15.25 A 3.094 3.094 0 0 0 4.361 16.261 A 2.698 2.698 0 0 0 4.851 17.125 A 3.831 3.831 0 0 0 5.401 17.652 Q 5.985 18.117 6.898 18.564 A 13.166 13.166 0 0 0 7.026 18.625 A 39.161 39.161 0 0 0 8.079 19.105 Q 9.307 19.645 10.988 20.306 A 124.909 124.909 0 0 0 11.101 20.35 Q 13.651 21.3 15.451 22.3 A 9.111 9.111 0 0 1 16.929 23.312 A 6.815 6.815 0 0 1 18.201 24.725 Q 19.125 26.111 19.15 28.184 A 9.598 9.598 0 0 1 19.151 28.3 A 8.304 8.304 0 0 1 18.792 30.807 A 6.357 6.357 0 0 1 16.251 34.2 A 10.403 10.403 0 0 1 13.094 35.635 Q 11.055 36.2 8.451 36.2 A 29.329 29.329 0 0 1 6.303 36.126 Q 5.289 36.051 4.404 35.901 A 15.474 15.474 0 0 1 3.626 35.75 Q 1.601 35.3 0.051 34.5 Z M 80.251 34.5 L 80.251 30.5 Q 81.626 31.188 83.499 31.783 A 34.191 34.191 0 0 0 84.126 31.975 Q 86.401 32.65 88.751 32.65 A 16.539 16.539 0 0 0 90.444 32.57 Q 92.511 32.356 93.601 31.575 A 3.718 3.718 0 0 0 94.586 30.56 Q 95.082 29.783 95.1 28.774 A 4.268 4.268 0 0 0 95.101 28.7 Q 95.101 27.7 94.551 26.9 A 3.437 3.437 0 0 0 94.069 26.35 Q 93.511 25.825 92.576 25.3 A 17.241 17.241 0 0 0 91.565 24.78 Q 90.322 24.188 88.501 23.5 A 49.877 49.877 0 0 1 86.656 22.75 Q 85.207 22.125 84.051 21.5 A 9.893 9.893 0 0 1 82.595 20.548 A 7.208 7.208 0 0 1 81.201 19.1 Q 80.257 17.779 80.204 15.746 A 9.387 9.387 0 0 1 80.201 15.5 A 6.617 6.617 0 0 1 80.641 13.037 Q 81.259 11.481 82.746 10.409 A 7.653 7.653 0 0 1 82.976 10.25 A 10.248 10.248 0 0 1 86.069 8.892 Q 87.407 8.538 88.982 8.439 A 20.146 20.146 0 0 1 90.251 8.4 A 22.408 22.408 0 0 1 93.186 8.586 A 18.804 18.804 0 0 1 94.826 8.875 A 20.14 20.14 0 0 1 98.304 9.981 A 18.371 18.371 0 0 1 98.801 10.2 L 97.301 13.7 Q 95.601 13 93.751 12.5 Q 91.901 12 89.951 12 A 13.445 13.445 0 0 0 88.46 12.077 Q 86.828 12.26 85.826 12.875 Q 84.401 13.75 84.401 15.25 A 3.094 3.094 0 0 0 84.561 16.261 A 2.698 2.698 0 0 0 85.051 17.125 A 3.831 3.831 0 0 0 85.601 17.652 Q 86.185 18.117 87.098 18.564 A 13.166 13.166 0 0 0 87.226 18.625 A 39.161 39.161 0 0 0 88.279 19.105 Q 89.507 19.645 91.188 20.306 A 124.909 124.909 0 0 0 91.301 20.35 Q 93.851 21.3 95.651 22.3 A 9.111 9.111 0 0 1 97.129 23.312 A 6.815 6.815 0 0 1 98.401 24.725 Q 99.325 26.111 99.35 28.184 A 9.598 9.598 0 0 1 99.351 28.3 A 8.304 8.304 0 0 1 98.992 30.807 A 6.357 6.357 0 0 1 96.451 34.2 A 10.403 10.403 0 0 1 93.294 35.635 Q 91.255 36.2 88.651 36.2 A 29.329 29.329 0 0 1 86.503 36.126 Q 85.489 36.051 84.604 35.901 A 15.474 15.474 0 0 1 83.826 35.75 Q 81.801 35.3 80.251 34.5 Z M 73.601 17.45 L 73.601 35.7 L 70.401 35.7 L 69.551 31.9 L 69.351 31.9 Q 67.601 34.1 65.676 35.15 A 7.389 7.389 0 0 1 64.024 35.79 Q 62.476 36.2 60.351 36.2 Q 56.701 36.2 54.301 34.275 Q 52.114 32.521 51.92 28.962 A 13.055 13.055 0 0 1 51.901 28.25 A 8.08 8.08 0 0 1 52.372 25.429 Q 53.107 23.44 54.991 22.117 A 8.852 8.852 0 0 1 55.051 22.075 A 10.61 10.61 0 0 1 57.618 20.813 Q 60.17 19.929 63.909 19.735 A 39.309 39.309 0 0 1 64.751 19.7 L 69.301 19.55 L 69.301 17.95 Q 69.301 14.992 68.17 13.632 A 3.151 3.151 0 0 0 67.851 13.3 A 4.744 4.744 0 0 0 66.036 12.305 Q 65.034 12 63.751 12 Q 61.651 12 59.751 12.625 A 29.601 29.601 0 0 0 57.041 13.661 A 26.019 26.019 0 0 0 56.201 14.05 L 54.851 10.75 A 16.999 16.999 0 0 1 56.763 9.869 Q 57.736 9.488 58.851 9.167 A 27.9 27.9 0 0 1 59.001 9.125 Q 61.401 8.45 64.001 8.45 Q 68.901 8.45 71.251 10.6 A 6.524 6.524 0 0 1 72.957 13.228 Q 73.339 14.274 73.494 15.566 A 15.807 15.807 0 0 1 73.601 17.45 Z M 47.051 20.5 L 47.051 23.15 L 28.701 23.15 A 15.263 15.263 0 0 0 28.983 25.842 Q 29.513 28.461 31.026 30.075 A 7.272 7.272 0 0 0 34.817 32.194 A 10.94 10.94 0 0 0 37.251 32.45 A 23.335 23.335 0 0 0 39.515 32.346 Q 40.646 32.235 41.636 32.008 A 14.002 14.002 0 0 0 41.776 31.975 A 24.13 24.13 0 0 0 44.534 31.127 A 28.848 28.848 0 0 0 45.851 30.6 L 45.851 34.45 Q 43.801 35.35 41.801 35.775 A 17.919 17.919 0 0 1 39.925 36.064 Q 38.608 36.2 37.051 36.2 A 15.843 15.843 0 0 1 33.364 35.788 A 12.812 12.812 0 0 1 30.326 34.65 Q 27.401 33.1 25.776 30.025 A 13.345 13.345 0 0 1 24.532 26.488 Q 24.204 24.913 24.158 23.1 A 23.616 23.616 0 0 1 24.151 22.5 A 22.011 22.011 0 0 1 24.413 19.01 Q 24.773 16.771 25.626 14.95 A 12.071 12.071 0 0 1 27.656 11.874 A 10.554 10.554 0 0 1 29.776 10.1 A 10.896 10.896 0 0 1 34.489 8.481 A 13.727 13.727 0 0 1 36.001 8.4 Q 39.451 8.4 41.926 9.9 Q 44.401 11.4 45.726 14.125 Q 47.051 16.85 47.051 20.5 Z M 193.501 0 L 193.501 35.7 L 189.201 35.7 L 189.201 10.75 Q 189.201 8.827 189.241 7.584 A 45.331 45.331 0 0 1 189.251 7.3 Q 189.301 6 189.401 4.6 A 31.337 31.337 0 0 1 188.822 5.165 Q 188.502 5.468 188.21 5.726 A 16.944 16.944 0 0 1 187.951 5.95 A 599.962 599.962 0 0 0 187.604 6.244 Q 187.087 6.681 186.399 7.266 A 1655.883 1655.883 0 0 0 186.301 7.35 L 182.501 10.45 L 180.201 7.5 L 189.851 0 L 193.501 0 Z M 125.776 32.55 A 11.125 11.125 0 0 0 127.262 30.52 Q 129.151 27.225 129.151 22.25 A 24.08 24.08 0 0 0 129.137 21.428 Q 129.003 17.512 127.576 14.725 A 13.406 13.406 0 0 0 127.27 14.161 A 11.074 11.074 0 0 0 123.226 10.025 A 11.425 11.425 0 0 0 120.332 8.832 A 13.894 13.894 0 0 0 116.801 8.4 A 15.926 15.926 0 0 0 114.197 8.604 A 11.071 11.071 0 0 0 107.701 12 A 10.907 10.907 0 0 0 106.172 14.101 Q 104.351 17.346 104.351 22.25 Q 104.351 26.7 105.951 29.825 A 13.608 13.608 0 0 0 106.424 30.674 A 11.067 11.067 0 0 0 110.326 34.575 A 11.473 11.473 0 0 0 112.902 35.686 A 13.25 13.25 0 0 0 116.651 36.2 A 15.912 15.912 0 0 0 119.053 36.025 A 11.156 11.156 0 0 0 125.776 32.55 Z M 108.901 22.25 A 19.521 19.521 0 0 0 109.112 25.219 Q 109.347 26.745 109.844 27.996 A 9.293 9.293 0 0 0 110.776 29.775 A 6.067 6.067 0 0 0 114.702 32.348 A 9.803 9.803 0 0 0 116.751 32.55 A 9.328 9.328 0 0 0 119.072 32.279 A 6.073 6.073 0 0 0 122.701 29.775 Q 124.243 27.522 124.533 23.966 A 21.122 21.122 0 0 0 124.601 22.25 Q 124.601 18.921 123.667 16.599 A 8.839 8.839 0 0 0 122.701 14.8 A 6.108 6.108 0 0 0 118.941 12.338 A 9.89 9.89 0 0 0 116.701 12.1 A 9.775 9.775 0 0 0 114.411 12.351 A 5.949 5.949 0 0 0 110.751 14.8 A 9.503 9.503 0 0 0 109.49 17.541 Q 109.124 18.8 108.985 20.312 A 21.228 21.228 0 0 0 108.901 22.25 Z M 69.251 22.6 L 65.301 22.75 Q 60.301 22.95 58.376 24.35 A 4.482 4.482 0 0 0 56.489 27.606 A 6.165 6.165 0 0 0 56.451 28.3 Q 56.451 29.939 57.18 30.941 A 3.182 3.182 0 0 0 57.826 31.6 A 4.955 4.955 0 0 0 59.775 32.487 Q 60.491 32.647 61.324 32.65 A 8.754 8.754 0 0 0 61.351 32.65 A 10.144 10.144 0 0 0 64.015 32.316 A 7.792 7.792 0 0 0 67.001 30.775 A 5.903 5.903 0 0 0 68.872 27.859 Q 69.168 26.875 69.232 25.684 A 12.611 12.611 0 0 0 69.251 25 L 69.251 22.6 Z M 28.801 19.65 L 42.451 19.65 A 12.456 12.456 0 0 0 42.203 17.285 Q 41.91 15.884 41.273 14.776 A 7.171 7.171 0 0 0 40.851 14.125 A 4.944 4.944 0 0 0 37.998 12.24 Q 37.148 12.019 36.125 12.001 A 10.342 10.342 0 0 0 35.951 12 A 7.887 7.887 0 0 0 33.775 12.285 A 5.865 5.865 0 0 0 30.976 14.025 A 7.78 7.78 0 0 0 29.486 16.532 Q 29.099 17.563 28.907 18.801 A 15.037 15.037 0 0 0 28.801 19.65 Z"
              strokeWidth={2}
              initial={{
                strokeWidth: 0,
                pathLength: 0,
                fill: "rgba(255, 255, 255, 0)",
              }}
              animate={{
                strokeWidth: 3,
                pathLength: 1,
                fill: "rgba(255, 255, 255, 1)",
              }}
              transition={{
                default: { delay: delay, duration: 4, ease: "easeInOut" },
                fill: { delay: delay, duration: 2, ease: "linear" },
              }}
            />
            <motion.path
              transform="translate(80, 85)"
              d="M 158.701 18.25 L 158.701 35.7 L 154.351 35.7 L 154.351 18.55 Q 154.351 13.067 150.015 12.245 A 8.944 8.944 0 0 0 148.351 12.1 A 12.377 12.377 0 0 0 146.181 12.276 Q 145.007 12.486 144.107 12.944 A 5.004 5.004 0 0 0 142.201 14.6 Q 140.501 17.1 140.501 21.8 L 140.501 35.7 L 136.101 35.7 L 136.101 8.9 L 139.651 8.9 L 140.301 12.55 L 140.551 12.55 Q 141.851 10.45 144.151 9.425 Q 146.451 8.4 149.001 8.4 A 15.798 15.798 0 0 1 151.755 8.624 Q 153.246 8.889 154.422 9.465 A 7.312 7.312 0 0 1 156.251 10.725 A 6.925 6.925 0 0 1 157.925 13.31 Q 158.355 14.428 158.547 15.825 A 17.904 17.904 0 0 1 158.701 18.25 Z M 0.051 34.5 L 0.051 30.5 Q 1.426 31.188 3.299 31.783 A 34.191 34.191 0 0 0 3.926 31.975 Q 6.201 32.65 8.551 32.65 A 16.539 16.539 0 0 0 10.244 32.57 Q 12.311 32.356 13.401 31.575 A 3.718 3.718 0 0 0 14.386 30.56 Q 14.882 29.783 14.9 28.774 A 4.268 4.268 0 0 0 14.901 28.7 Q 14.901 27.7 14.351 26.9 A 3.437 3.437 0 0 0 13.869 26.35 Q 13.311 25.825 12.376 25.3 A 17.241 17.241 0 0 0 11.365 24.78 Q 10.122 24.188 8.301 23.5 A 49.877 49.877 0 0 1 6.456 22.75 Q 5.007 22.125 3.851 21.5 A 9.893 9.893 0 0 1 2.395 20.548 A 7.208 7.208 0 0 1 1.001 19.1 Q 0.057 17.779 0.004 15.746 A 9.387 9.387 0 0 1 0.001 15.5 A 6.617 6.617 0 0 1 0.441 13.037 Q 1.059 11.481 2.546 10.409 A 7.653 7.653 0 0 1 2.776 10.25 A 10.248 10.248 0 0 1 5.869 8.892 Q 7.207 8.538 8.782 8.439 A 20.146 20.146 0 0 1 10.051 8.4 A 22.408 22.408 0 0 1 12.986 8.586 A 18.804 18.804 0 0 1 14.626 8.875 A 20.14 20.14 0 0 1 18.104 9.981 A 18.371 18.371 0 0 1 18.601 10.2 L 17.101 13.7 Q 15.401 13 13.551 12.5 Q 11.701 12 9.751 12 A 13.445 13.445 0 0 0 8.26 12.077 Q 6.628 12.26 5.626 12.875 Q 4.201 13.75 4.201 15.25 A 3.094 3.094 0 0 0 4.361 16.261 A 2.698 2.698 0 0 0 4.851 17.125 A 3.831 3.831 0 0 0 5.401 17.652 Q 5.985 18.117 6.898 18.564 A 13.166 13.166 0 0 0 7.026 18.625 A 39.161 39.161 0 0 0 8.079 19.105 Q 9.307 19.645 10.988 20.306 A 124.909 124.909 0 0 0 11.101 20.35 Q 13.651 21.3 15.451 22.3 A 9.111 9.111 0 0 1 16.929 23.312 A 6.815 6.815 0 0 1 18.201 24.725 Q 19.125 26.111 19.15 28.184 A 9.598 9.598 0 0 1 19.151 28.3 A 8.304 8.304 0 0 1 18.792 30.807 A 6.357 6.357 0 0 1 16.251 34.2 A 10.403 10.403 0 0 1 13.094 35.635 Q 11.055 36.2 8.451 36.2 A 29.329 29.329 0 0 1 6.303 36.126 Q 5.289 36.051 4.404 35.901 A 15.474 15.474 0 0 1 3.626 35.75 Q 1.601 35.3 0.051 34.5 Z M 80.251 34.5 L 80.251 30.5 Q 81.626 31.188 83.499 31.783 A 34.191 34.191 0 0 0 84.126 31.975 Q 86.401 32.65 88.751 32.65 A 16.539 16.539 0 0 0 90.444 32.57 Q 92.511 32.356 93.601 31.575 A 3.718 3.718 0 0 0 94.586 30.56 Q 95.082 29.783 95.1 28.774 A 4.268 4.268 0 0 0 95.101 28.7 Q 95.101 27.7 94.551 26.9 A 3.437 3.437 0 0 0 94.069 26.35 Q 93.511 25.825 92.576 25.3 A 17.241 17.241 0 0 0 91.565 24.78 Q 90.322 24.188 88.501 23.5 A 49.877 49.877 0 0 1 86.656 22.75 Q 85.207 22.125 84.051 21.5 A 9.893 9.893 0 0 1 82.595 20.548 A 7.208 7.208 0 0 1 81.201 19.1 Q 80.257 17.779 80.204 15.746 A 9.387 9.387 0 0 1 80.201 15.5 A 6.617 6.617 0 0 1 80.641 13.037 Q 81.259 11.481 82.746 10.409 A 7.653 7.653 0 0 1 82.976 10.25 A 10.248 10.248 0 0 1 86.069 8.892 Q 87.407 8.538 88.982 8.439 A 20.146 20.146 0 0 1 90.251 8.4 A 22.408 22.408 0 0 1 93.186 8.586 A 18.804 18.804 0 0 1 94.826 8.875 A 20.14 20.14 0 0 1 98.304 9.981 A 18.371 18.371 0 0 1 98.801 10.2 L 97.301 13.7 Q 95.601 13 93.751 12.5 Q 91.901 12 89.951 12 A 13.445 13.445 0 0 0 88.46 12.077 Q 86.828 12.26 85.826 12.875 Q 84.401 13.75 84.401 15.25 A 3.094 3.094 0 0 0 84.561 16.261 A 2.698 2.698 0 0 0 85.051 17.125 A 3.831 3.831 0 0 0 85.601 17.652 Q 86.185 18.117 87.098 18.564 A 13.166 13.166 0 0 0 87.226 18.625 A 39.161 39.161 0 0 0 88.279 19.105 Q 89.507 19.645 91.188 20.306 A 124.909 124.909 0 0 0 91.301 20.35 Q 93.851 21.3 95.651 22.3 A 9.111 9.111 0 0 1 97.129 23.312 A 6.815 6.815 0 0 1 98.401 24.725 Q 99.325 26.111 99.35 28.184 A 9.598 9.598 0 0 1 99.351 28.3 A 8.304 8.304 0 0 1 98.992 30.807 A 6.357 6.357 0 0 1 96.451 34.2 A 10.403 10.403 0 0 1 93.294 35.635 Q 91.255 36.2 88.651 36.2 A 29.329 29.329 0 0 1 86.503 36.126 Q 85.489 36.051 84.604 35.901 A 15.474 15.474 0 0 1 83.826 35.75 Q 81.801 35.3 80.251 34.5 Z M 73.601 17.45 L 73.601 35.7 L 70.401 35.7 L 69.551 31.9 L 69.351 31.9 Q 67.601 34.1 65.676 35.15 A 7.389 7.389 0 0 1 64.024 35.79 Q 62.476 36.2 60.351 36.2 Q 56.701 36.2 54.301 34.275 Q 52.114 32.521 51.92 28.962 A 13.055 13.055 0 0 1 51.901 28.25 A 8.08 8.08 0 0 1 52.372 25.429 Q 53.107 23.44 54.991 22.117 A 8.852 8.852 0 0 1 55.051 22.075 A 10.61 10.61 0 0 1 57.618 20.813 Q 60.17 19.929 63.909 19.735 A 39.309 39.309 0 0 1 64.751 19.7 L 69.301 19.55 L 69.301 17.95 Q 69.301 14.992 68.17 13.632 A 3.151 3.151 0 0 0 67.851 13.3 A 4.744 4.744 0 0 0 66.036 12.305 Q 65.034 12 63.751 12 Q 61.651 12 59.751 12.625 A 29.601 29.601 0 0 0 57.041 13.661 A 26.019 26.019 0 0 0 56.201 14.05 L 54.851 10.75 A 16.999 16.999 0 0 1 56.763 9.869 Q 57.736 9.488 58.851 9.167 A 27.9 27.9 0 0 1 59.001 9.125 Q 61.401 8.45 64.001 8.45 Q 68.901 8.45 71.251 10.6 A 6.524 6.524 0 0 1 72.957 13.228 Q 73.339 14.274 73.494 15.566 A 15.807 15.807 0 0 1 73.601 17.45 Z M 47.051 20.5 L 47.051 23.15 L 28.701 23.15 A 15.263 15.263 0 0 0 28.983 25.842 Q 29.513 28.461 31.026 30.075 A 7.272 7.272 0 0 0 34.817 32.194 A 10.94 10.94 0 0 0 37.251 32.45 A 23.335 23.335 0 0 0 39.515 32.346 Q 40.646 32.235 41.636 32.008 A 14.002 14.002 0 0 0 41.776 31.975 A 24.13 24.13 0 0 0 44.534 31.127 A 28.848 28.848 0 0 0 45.851 30.6 L 45.851 34.45 Q 43.801 35.35 41.801 35.775 A 17.919 17.919 0 0 1 39.925 36.064 Q 38.608 36.2 37.051 36.2 A 15.843 15.843 0 0 1 33.364 35.788 A 12.812 12.812 0 0 1 30.326 34.65 Q 27.401 33.1 25.776 30.025 A 13.345 13.345 0 0 1 24.532 26.488 Q 24.204 24.913 24.158 23.1 A 23.616 23.616 0 0 1 24.151 22.5 A 22.011 22.011 0 0 1 24.413 19.01 Q 24.773 16.771 25.626 14.95 A 12.071 12.071 0 0 1 27.656 11.874 A 10.554 10.554 0 0 1 29.776 10.1 A 10.896 10.896 0 0 1 34.489 8.481 A 13.727 13.727 0 0 1 36.001 8.4 Q 39.451 8.4 41.926 9.9 Q 44.401 11.4 45.726 14.125 Q 47.051 16.85 47.051 20.5 Z M 193.501 0 L 193.501 35.7 L 189.201 35.7 L 189.201 10.75 Q 189.201 8.827 189.241 7.584 A 45.331 45.331 0 0 1 189.251 7.3 Q 189.301 6 189.401 4.6 A 31.337 31.337 0 0 1 188.822 5.165 Q 188.502 5.468 188.21 5.726 A 16.944 16.944 0 0 1 187.951 5.95 A 599.962 599.962 0 0 0 187.604 6.244 Q 187.087 6.681 186.399 7.266 A 1655.883 1655.883 0 0 0 186.301 7.35 L 182.501 10.45 L 180.201 7.5 L 189.851 0 L 193.501 0 Z M 125.776 32.55 A 11.125 11.125 0 0 0 127.262 30.52 Q 129.151 27.225 129.151 22.25 A 24.08 24.08 0 0 0 129.137 21.428 Q 129.003 17.512 127.576 14.725 A 13.406 13.406 0 0 0 127.27 14.161 A 11.074 11.074 0 0 0 123.226 10.025 A 11.425 11.425 0 0 0 120.332 8.832 A 13.894 13.894 0 0 0 116.801 8.4 A 15.926 15.926 0 0 0 114.197 8.604 A 11.071 11.071 0 0 0 107.701 12 A 10.907 10.907 0 0 0 106.172 14.101 Q 104.351 17.346 104.351 22.25 Q 104.351 26.7 105.951 29.825 A 13.608 13.608 0 0 0 106.424 30.674 A 11.067 11.067 0 0 0 110.326 34.575 A 11.473 11.473 0 0 0 112.902 35.686 A 13.25 13.25 0 0 0 116.651 36.2 A 15.912 15.912 0 0 0 119.053 36.025 A 11.156 11.156 0 0 0 125.776 32.55 Z M 108.901 22.25 A 19.521 19.521 0 0 0 109.112 25.219 Q 109.347 26.745 109.844 27.996 A 9.293 9.293 0 0 0 110.776 29.775 A 6.067 6.067 0 0 0 114.702 32.348 A 9.803 9.803 0 0 0 116.751 32.55 A 9.328 9.328 0 0 0 119.072 32.279 A 6.073 6.073 0 0 0 122.701 29.775 Q 124.243 27.522 124.533 23.966 A 21.122 21.122 0 0 0 124.601 22.25 Q 124.601 18.921 123.667 16.599 A 8.839 8.839 0 0 0 122.701 14.8 A 6.108 6.108 0 0 0 118.941 12.338 A 9.89 9.89 0 0 0 116.701 12.1 A 9.775 9.775 0 0 0 114.411 12.351 A 5.949 5.949 0 0 0 110.751 14.8 A 9.503 9.503 0 0 0 109.49 17.541 Q 109.124 18.8 108.985 20.312 A 21.228 21.228 0 0 0 108.901 22.25 Z M 69.251 22.6 L 65.301 22.75 Q 60.301 22.95 58.376 24.35 A 4.482 4.482 0 0 0 56.489 27.606 A 6.165 6.165 0 0 0 56.451 28.3 Q 56.451 29.939 57.18 30.941 A 3.182 3.182 0 0 0 57.826 31.6 A 4.955 4.955 0 0 0 59.775 32.487 Q 60.491 32.647 61.324 32.65 A 8.754 8.754 0 0 0 61.351 32.65 A 10.144 10.144 0 0 0 64.015 32.316 A 7.792 7.792 0 0 0 67.001 30.775 A 5.903 5.903 0 0 0 68.872 27.859 Q 69.168 26.875 69.232 25.684 A 12.611 12.611 0 0 0 69.251 25 L 69.251 22.6 Z M 28.801 19.65 L 42.451 19.65 A 12.456 12.456 0 0 0 42.203 17.285 Q 41.91 15.884 41.273 14.776 A 7.171 7.171 0 0 0 40.851 14.125 A 4.944 4.944 0 0 0 37.998 12.24 Q 37.148 12.019 36.125 12.001 A 10.342 10.342 0 0 0 35.951 12 A 7.887 7.887 0 0 0 33.775 12.285 A 5.865 5.865 0 0 0 30.976 14.025 A 7.78 7.78 0 0 0 29.486 16.532 Q 29.099 17.563 28.907 18.801 A 15.037 15.037 0 0 0 28.801 19.65 Z"
              strokeWidth={2}
              stroke="black"
              initial={{ strokeWidth: 0, pathLength: 0, fill: "rgba(0, 0, 0, 0)" }}
              animate={{ strokeWidth: 3, pathLength: 1, fill: "rgba(0, 0, 0, 1)" }}
              transition={{
                default: { delay: delay, duration: 4, ease: "easeInOut" },
                fill: { delay: delay, duration: 2, ease: "linear" },
              }}
            />
          </motion.svg>
        </div>
        <div id="campaignSelector" className="flex justify-center items-center gap-4">
          {campaigns.map((campaign: Campaign, index: number) => {
            if (campaign.enabled) {
              return (
                <Link key={campaign.id} href={`/campaign/${campaign.id}`} style={{ marginTop: "3rem" }}><p className="text-2xl font-bold underline">Week {index + 1}</p></Link>
              )
            } else {
              return (
                <Link key={campaign.id} href={"/"} style={{ marginTop: "3rem" }} className="pointer-events-none"><p className="text-2xl font-bold line-through" style={{ color: "grey" }}>Week {index + 1}</p></Link>
              )
            }
          })}
        </div>
        { users.length > 0 &&
          <div id="leaderboardTable" className="xl:w-[30vw] lg:w-[40vw] md:w-[50vw] w-[90vw]">
            <TableView users={users}></TableView>
          </div>
        }
      </section>
    </DefaultLayout>
  );
}
