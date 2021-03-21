import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const Services = () => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms  />
      <div className="sheet__inner">
        <h1 className="sheet__title">Our Services</h1>
        <p className="sheet__lead">- Mobile App Development for Android, iOS</p>
        <p className="sheet__lead">- Web Development for static and dynamic website</p>
        <p className="sheet__lead">- Website Based Solutions</p>
      </div>
    </article>
  </Layout>
)

export default Services

