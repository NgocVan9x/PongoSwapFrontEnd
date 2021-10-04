import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Head from 'next/head'

const TemplateMaintain = () => {
  return (
    <LayoutWrapper>
      <Head
        title="Maintenance| VIBBIDI"
        desc="There are many ways you can use our services – to share information or to communicate with other people. As you use our services, we want you to be clear how we’re using information and the ways in which you can protect your privacy."
        image="/static/VIBBIDI.png"
        url="/maintenance"
      />
      <LeftWrapper>
        <Link href="/genre?chartUri=/top" as="/" prefetch={false}>
          <a>
            <img className={'icon-logo'} src={'/static/icon/VIBBIDI.svg'} />
          </a>
        </Link>
      </LeftWrapper>
      <img className={'icon-maintenance'} src={'/static/icon/icon-maintenance.svg'} />
      <Title>VIBBIDI is currently down for maintenance</Title>
      <Description>We apologize for any inconvenience caused. We’re almost done.</Description>
    </LayoutWrapper>
  )
}
const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  position: relative;
  img.icon-maintenance {
    width: 246px;
    height: 154px;
  }
`
const LeftWrapper = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
  img.icon-logo {
    width: 82px;
    height: 16px;
  }
`
const Title = styled.div`
  font-family: Barlow;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;
  /* or 100% */

  text-align: center;

  color: #ffffff;
  width: 275px;
`
const Description = styled.div`
  font-family: Barlow;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  /* or 125% */

  text-align: center;

  color: #ffffff;
  width: 303px;
  margin-top: 13px;
`
export default TemplateMaintain
