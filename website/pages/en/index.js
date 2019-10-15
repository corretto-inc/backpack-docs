/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const ContentCards = props => (
      <div className="content-cards">
        {props.items.map((item, key) => (
          <div className="content-cards__card" key={key}>
            <div className="content-cards__icon-wrapper">
              <img className="content-cards__icon" src={item.icon}/>
            </div>
            <h4 className="content-cards__card-title">{item.title}</h4>
            <p className="content-cards__card-description">{item.description}</p>
            <a className="content-cards__card-link" href={item.href}>View</a>
          </div>
        ))}
      </div>
    )

    return (
      <div className="main__wrapper">
        <div className="main__limiter">
          <div className="main__header">
            <h2 className="main__header-title">코딩없이 만드는 API서버</h2>
            <p className="main__header-description">코딩하지 않고 API 서버를 구성해보세요. 수십명이 쓰는 모바일 앱부터 수백만이 이용하는 웹서비스 까지 다양한 분야에서 사용이 가능합니다.</p>
          </div>
          <div className="main__content-cards">
            <ContentCards
              items={[
                {
                  icon: `${baseUrl}img/icon-api.svg`,
                  alt: 'API 서버를 표현한 일러스트',
                  title: '1분만에 만드는 API 서버',
                  description: '백팩의 강력한 기능들이 최소한의 시간으로 API 서버의 구축과 운영을 가능하게 합니다!',
                  href: `${baseUrl}docs/getting-started-overview`
                },
                {
                  icon: `${baseUrl}img/icon-modules.svg`,
                  alt: '백팩의 핵심 코어모듈을 표현한 일러스트',
                  title: '백팩을 이루는 핵심 코어모듈',
                  description: '유기적으로 연결 된 핵심 코어모듈 3가지를 알아보세요!',
                  href: `${baseUrl}docs/core-guides-model`
                },
                {
                  icon: `${baseUrl}img/icon-circle-question.svg`,
                  alt: '고객지원센터를 표현한 일러스트',
                  title: '고객지원센터',
                  description: '매뉴얼을 통해 문제를 해결할 수 없으신가요? 기술지원 관련 문의를 통해 문의해주세요!',
                  href: 'https://thebackpack.io/contact-us'
                },
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;

    return (
      <HomeSplash siteConfig={siteConfig} language={language} />
    );
  }
}

module.exports = Index;
