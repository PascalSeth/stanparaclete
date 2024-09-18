'use client'

import React from 'react';
import Image from 'next/image';

type Props = {}

function Page({ }: Props) {
  return (
    <div className="min-h-screen bg-[#171720] text-gray-400">
      {/* Page Header */}
      <header className="text-center py-16 bg-gray-900 text-white">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Experience What We Do
        </h1>
        <p className="mt-4 text-lg leading-6">
          Discover the expertise and skills we bring to every project.
        </p>
      </header>

      {/* Content Section */}
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Technical Skills Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-gray-400">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-400">Programming and Development</h3>
              <p className="mt-2 text-gray-600">
                Proficiency in various programming languages, frameworks, and tools.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-400">Web Development</h3>
              <p className="mt-2 text-gray-600">
                Expertise in building responsive, scalable web applications.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-400">Cloud Computing</h3>
              <p className="mt-2 text-gray-600">
                Experience with cloud platforms like AWS, Azure, and Google Cloud.
              </p>
            </div>
          </div>
        </section>

        {/* Domain Knowledge Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-gray-400">Domain Knowledge</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-400">Industry Expertise</h3>
              <p className="mt-2 text-gray-600">
                Understanding the specific needs and challenges of the industries we serve.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-400">Healthcare</h3>
              <p className="mt-2 text-gray-600">
                Specialization in healthcare technology and solutions.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-400">Financial Services</h3>
              <p className="mt-2 text-gray-600">
                Expertise in fintech and financial technology platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Project Management Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-gray-400">Project Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-400">Project Planning</h3>
              <p className="mt-2 text-gray-600">
                Defining project scope, timelines, and resources.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-400">Agile Methodology</h3>
              <p className="mt-2 text-gray-600">
                Proficiency in agile processes, including Scrum and Kanban.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-400">Risk Management</h3>
              <p className="mt-2 text-gray-600">
                Identifying and mitigating potential risks.
              </p>
            </div>
          </div>
        </section>

        {/* Soft Skills Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-gray-400">Soft Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-400">Creativity</h3>
              <p className="mt-2 text-gray-600">
                Thinking outside the box to develop innovative solutions.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-400">Problem-Solving</h3>
              <p className="mt-2 text-gray-600">
                Identifying and addressing challenges effectively.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-400">Adaptability</h3>
              <p className="mt-2 text-gray-600">
                Adjusting to changing requirements and technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section - Grid Layout */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left - Text Section */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-extrabold text-gray-400">Our Latest Projects</h2>
            <p className="text-lg leading-7 text-gray-600">
              Explore our recent projects that highlight our expertise and innovative approach.
            </p>
          </div>

          {/* Right - Image Section */}
          <div className="h-fit w-full">
            <Image src='/apparel.png' className="w-full rounded-lg" width={1920} height={1080} alt='Apparel' />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Page;
