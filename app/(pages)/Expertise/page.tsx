import React from 'react';

type Props = {}

function Page({ }: Props) {
  return (
    <div className="min-h-screen  bg-[#070707] text-gray-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Experience What We Do
          </h1>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Discover the expertise and skills we bring to every project.
          </p>
        </div>

        {/* Technical Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-900">Programming and Development</h3>
              <p className="mt-2 text-gray-600">
                Proficiency in various programming languages, frameworks, and tools.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-900">Software Architecture</h3>
              <p className="mt-2 text-gray-600">
                Designing and building scalable, maintainable, and efficient software systems.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-900">Database Management</h3>
              <p className="mt-2 text-gray-600">
                Expertise in database technologies and data modeling.
              </p>
            </div>
          </div>
        </section>

        {/* Domain Knowledge Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Domain Knowledge</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-900">Industry Expertise</h3>
              <p className="mt-2 text-gray-600">
                Understanding the specific needs and challenges of the industries we serve.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-900">Business Analysis</h3>
              <p className="mt-2 text-gray-600">
                Gathering and analyzing requirements to develop tailored solutions.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-900">Problem-Solving</h3>
              <p className="mt-2 text-gray-600">
                Identifying and addressing complex technical and business challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Project Management Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Project Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-900">Project Planning</h3>
              <p className="mt-2 text-gray-600">
                Defining project scope, timelines, and resources.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-900">Team Management</h3>
              <p className="mt-2 text-gray-600">
                Leading and coordinating development teams.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-900">Risk Management</h3>
              <p className="mt-2 text-gray-600">
                Identifying and mitigating potential risks.
              </p>
            </div>
          </div>
        </section>

        {/* Soft Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Soft Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-900">Creativity</h3>
              <p className="mt-2 text-gray-600">
                Thinking outside the box to develop innovative solutions.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-900">Problem-Solving</h3>
              <p className="mt-2 text-gray-600">
                Identifying and addressing challenges effectively.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-900">Adaptability</h3>
              <p className="mt-2 text-gray-600">
                Adjusting to changing requirements and technologies.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Page;
