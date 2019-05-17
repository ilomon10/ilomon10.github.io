import React from "react"
import { graphql } from "gatsby";
import Link from "gatsby-link";
import Img from "gatsby-image";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import Flex from "../components/flex"
import Card, { CardOverlay, CardImage } from "../components/card"
import Text from "../components/text"

import constant from "../components/constant"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" lang='en'
      keywords={[`portfolio`, `ilomon10`, `web`, `designer`, `gatsby`, `application`, `react`]} />
    <Container style={{ paddingBottom: constant.padding[20] }}>
      <Flex parent wrap={true} gap='4' per={3}>
        {data.allMarkdownRemark.edges.map(({node}) => (
          <Flex child grow key={node.id}>
            <Card>
              <CardImage>
                <Img fluid={node.frontmatter.thumbnail.childImageSharp.fluid}/>
              </CardImage>
              <CardOverlay>
                <Flex parent endCross style={{ height: '100%' }}>
                  <Flex child>
                    <Text variant='display'>
                      <Link to={node.frontmatter.path}>
                      {node.frontmatter.title}
                      </Link>
                    </Text>
                    <Text variant='body1'>{node.frontmatter.date}</Text>
                    <Text variant='caption'>illustrator | web design</Text>
                  </Flex>
                </Flex>
              </CardOverlay>
            </Card>
          </Flex>
        ))}
      </Flex>
    </Container>
  </Layout>
)

export const pageQuery = graphql`
  query  {
    allMarkdownRemark(limit:12){
      edges{  
        node{
          id
          frontmatter {
            path
            title
            date
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 630) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
