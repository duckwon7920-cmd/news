import { IndustryCategory, BriefingItem, IndustryNewsItem, TargetCompany } from '../types';

export const INDUSTRY_CATEGORIES: IndustryCategory[] = [
  {
    id: 'steel-metal',
    name: '철강·금속',
    englishName: 'Steel & Metallurgy',
    icon: 'Layers',
    description: '수소환원제철(HyREX), 전기로 전환, 글로벌 탄소국경조정제도(CBAM) 대응 및 특수강 수요 동향',
    focusKeywords: ['수소환원제철', 'CBAM', '전기로', '특수강', '탄소배출권'],
    recentIssuesCount: 14,
    featuredCompanies: ['포스코홀딩스', '현대제철', '동국제강', '세아베스틸'],
    keyIssues: [
      {
        id: 'sm-1',
        title: 'EU CBAM 본격 시행에 따른 국내 철강사 전기로 투자 가속화',
        summary: '유럽연합 탄소국경조정제도 본격화에 대비해 고로 중심 제철 공정의 전기로 전환과 저탄소 스크랩 확보 경쟁 심화.',
        interviewCheckPoint: '철강 산업의 친환경 공정 전환 로드맵과 스크랩 단가 상승 리스크 대응 방안 질의 대비'
      },
      {
        id: 'sm-2',
        title: '조선용 후판 및 자동차용 초고강도강(AHSS) 공급 협상 동향',
        summary: '조선업 슈퍼사이클과 전기차 경량화에 따른 고부가 특수강 제품 믹스 개선 및 판가 협상 추이.',
        interviewCheckPoint: '전방 산업(조선, 완성차) 사이클이 철강 영업이익률에 미치는 영향 분석 필요'
      }
    ],
    briefingSample: {
      title: '철강·금속 20분 핵심 요약: 탄소세와 고부가 강재 트렌드',
      duration: '21:40',
      narrator: '산업전문 아나운서'
    }
  },
  {
    id: 'auto-mobility',
    name: '자동차·모빌리티',
    englishName: 'Automotive & Mobility',
    icon: 'Car',
    description: 'SDV(소프트웨어 중심 자동차), 하이브리드·전기차 믹스 전략, 자율주행 및 PBV 시장',
    focusKeywords: ['SDV', '하이브리드(HEV)', '자율주행 레벨3', 'PBV', 'E/E 아키텍처'],
    recentIssuesCount: 28,
    featuredCompanies: ['현대자동차', '기아', '현대모비스', 'HL만도', '현대위아'],
    keyIssues: [
      {
        id: 'am-1',
        title: 'SDV 전환을 위한 전장 부품 통합 제어기 및 OS 표준화',
        summary: '완성차 제조사들이 기존 수십 개 분산형 ECU를 통합 도메인 제어기로 압축하고 OTA 생태계 구축에 집중.',
        interviewCheckPoint: '전통 완성차의 소프트웨어 내재화 도전 과제와 IT 테크 기업 대비 경쟁력 설명'
      },
      {
        id: 'am-2',
        title: '전기차 캐즘 대응 하이브리드(HEV)·EREV 라인업 전면 확대',
        summary: '글로벌 수요 둔화기에 하이브리드 엔진 효율 극대화 및 주행거리 연장형 전기차(EREV)로 수익성 방어.',
        interviewCheckPoint: '파워트레인 다변화 포트폴리오가 부품 협력사 및 생산 라인에 미치는 변화 이해'
      }
    ],
    briefingSample: {
      title: '모빌리티 출근 브리핑: SDV와 하이브리드 공존 시대',
      duration: '28:15',
      narrator: '모빌리티 전문 앵커'
    }
  },
  {
    id: 'defense-aerospace',
    name: '방산·항공우주',
    englishName: 'Defense & Aerospace',
    icon: 'Shield',
    description: 'K-방산 수출 다변화, 유무인 복합 체계(MUM-T), 차세대 위성 발사체 및 도심항공교통(UAM)',
    focusKeywords: ['K-방산 수출', '유무인 복합', '누리호·발사체', 'MUM-T', '자주포·유도무기'],
    recentIssuesCount: 19,
    featuredCompanies: ['한화에어로스페이스', 'LIG넥스원', '한국항공우주(KAI)', '현대로템'],
    keyIssues: [
      {
        id: 'da-1',
        title: '폴란드·중동·루마니아 수출 후속 계약과 현지 공동 생산 라인 구축',
        summary: '단순 완제품 수출을 넘어 현지 기술 이전, 유지보수(MRO) 클러스터 패키지 수출 형태로 진화.',
        interviewCheckPoint: '방산 수주잔고의 매출 인식 주기와 해외 현지 라이선스 생산 시 품질관리 중요성'
      },
      {
        id: 'da-2',
        title: '유무인 복합 전투 체계(MUM-T) 실전 배치 기술 실증',
        summary: '전투기와 무인 편대기의 AI 협동 전술, 자율주행 지상전투차량(UGV) 개발 가속.',
        interviewCheckPoint: 'SW 알고리즘과 하드웨어 신뢰성 검증 시험 평가 절차의 연계성 이해'
      }
    ],
    briefingSample: {
      title: '방산·항공우주 모닝 리포트: 글로벌 수주잔고와 MRO 비즈니스',
      duration: '25:10',
      narrator: '국방 전문 브리퍼'
    }
  },
  {
    id: 'semiconductor',
    name: '반도체',
    englishName: 'Semiconductors',
    icon: 'Cpu',
    description: 'HBM4 16단 적층, 첨단 패키징(CoWoS), 파운드리 2nm 경쟁, EUV 노광 공정',
    focusKeywords: ['HBM4', '첨단 패키징', 'EUV', 'GAA 2nm', 'CXL', '온디바이스 AI'],
    recentIssuesCount: 35,
    featuredCompanies: ['삼성전자', 'SK하이닉스', '한미반도체', '원익IPS', '동진쎄미켐'],
    keyIssues: [
      {
        id: 'sc-1',
        title: 'AI 데이터센터발 HBM4 커스텀 베이스 다이 파운드리 협력 본격화',
        summary: '메모리 반도체와 파운드리 공정 간의 경계가 무너지며 TSV(실리콘 관통 전극) 및 하이브리드 본딩 도입 필수화.',
        interviewCheckPoint: '기존 DRAM과 HBM 공정 차이점 및 어드밴스드 패키징 밸류체인 장악의 중요성'
      },
      {
        id: 'sc-2',
        title: '2nm 게이트올어라운드(GAA) 수율 경쟁 및 차세대 CXL 상용화',
        summary: '전력 효율과 집적도 한계를 돌파하기 위한 공정 미세화 및 서버 메모리 확장 CXL 컨트롤러 개발.',
        interviewCheckPoint: '수율(Yield) 관리와 계측·검사 공정이 칩 제조원가에 미치는 영향'
      }
    ],
    briefingSample: {
      title: '반도체 슈퍼위크 브리핑: HBM4와 패키징 대전',
      duration: '31:50',
      narrator: '테크 전문 캐스터'
    }
  },
  {
    id: 'battery-energy',
    name: '배터리·에너지',
    englishName: 'Battery & Energy',
    icon: 'Zap',
    description: 'LFP 침투율 확대, 전고체 배터리 파일럿, ESS(에너지저장장치) 시장 급성장, 폐배터리 리사이클링',
    focusKeywords: ['전고체 배터리', 'LFP', 'ESS 전력망', '실리콘 음극재', '배터리 리사이클링'],
    recentIssuesCount: 22,
    featuredCompanies: ['LG에너지솔루션', '삼성SDI', 'SK온', '에코프로비엠', '포스코퓨처엠'],
    keyIssues: [
      {
        id: 'be-1',
        title: '글로벌 AI 데이터센터 전력 수급을 위한 산업용 ESS 수주 급증',
        summary: '전기차 일시적 둔화를 고성장하는 신재생 발전 연계 및 AI 데이터센터 비상전원 ESS 공급으로 만회.',
        interviewCheckPoint: 'ESS 배터리 셀의 열관리 안전성과 원가 경쟁력(LFP vs NCM) 분석'
      },
      {
        id: 'be-2',
        title: '전고체 배터리 대면적 파일럿 라인 가동과 양산 시점 검증',
        summary: '황화물계 고체 전해질 대량 합성 공정과 계면 저항 최소화 기술 난제 극복 연구 지속.',
        interviewCheckPoint: '차세대 배터리 양산성 확보를 위해 공정 기술 직무가 해결해야 할 핵심 과제'
      }
    ],
    briefingSample: {
      title: '배터리·에너지 브리핑: ESS 신시장과 차세대 음극재 기술',
      duration: '27:40',
      narrator: '에너지 전문 브리퍼'
    }
  },
  {
    id: 'smart-factory-ai',
    name: '스마트팩토리·제조 AI',
    englishName: 'Smart Factory & Industrial AI',
    icon: 'Bot',
    description: '디지털 트윈, 제조 비전 AI 품질 검사, 설비 예지보전(PdM), 협동로봇 및 자율이송로봇(AMR)',
    focusKeywords: ['디지털 트윈', '예지보전(PdM)', '협동로봇', '비전 AI', 'AMR 물류자동화'],
    recentIssuesCount: 16,
    featuredCompanies: ['포스코DX', '현대오토에버', '두산로보틱스', '레인보우로보틱스', 'LG CNS'],
    keyIssues: [
      {
        id: 'sf-1',
        title: '비전 AI 기반 초정밀 외관 불량 실시간 검출 및 공정 피드백 루프',
        summary: '작업자의 육안 검사를 AI 딥러닝 광학 검사로 대체하여 가성 불량률을 0.01% 미만으로 억제.',
        interviewCheckPoint: '제조 데이터 수집의 표준화(OPC UA, MQTT)와 엣지 컴퓨팅 아키텍처의 중요성'
      },
      {
        id: 'sf-2',
        title: '설비 진동·온도 다변량 센서 데이터를 활용한 무고장 예지보전',
        summary: '라인 불시 가동 중단(Down-time) 비용 절감을 위한 이상 탐지 머신러닝 알고리즘 현장 적용 확산.',
        interviewCheckPoint: '생산 가동률 증대와 설비 수명 연장을 위한 엔지니어의 데이터 활용 역량'
      }
    ],
    briefingSample: {
      title: '제조 AI 인사이트: 스마트팩토리 4.0 현장 사례 30분',
      duration: '29:00',
      narrator: '스마트팩토리 디렉터'
    }
  },
  {
    id: 'shipbuilding-marine',
    name: '조선·해양',
    englishName: 'Shipbuilding & Marine',
    icon: 'Anchor',
    description: 'LNG·암모니아 친환경 이중연료 추진선, FLNG 해양플랜트, 조선소 야드 자동화 용접 로봇',
    focusKeywords: ['LNG 운반선', '암모니아 추진선', 'FLNG', '야드 자동화', '선가 지수'],
    recentIssuesCount: 15,
    featuredCompanies: ['HD현대중공업', '한화오션', '삼성중공업', 'HD한국조선해양'],
    keyIssues: [
      {
        id: 'sb-1',
        title: '고부가가치 LNG선 슬롯 독점과 암모니아·메탄올 추진선 수주 확대',
        summary: 'IMO 탄소 배출 규제 강화로 친환경 대체연료 선박 발주가 이어지며 선가(클락슨 신조선가지수) 최고치 지속.',
        interviewCheckPoint: '친환경 이중연료 추진 엔진 시스템 및 극저온 화물창 보랭재 기술 원리 이해'
      },
      {
        id: 'sb-2',
        title: '야드 블록 조립 자동화 용접 로봇 도입으로 공기 단축 및 인력난 해소',
        summary: '옥외 작업 비중이 높은 조선소 공정에 협동로봇과 3차원 스캔 검사 기법을 도입해 생산성 30% 개선.',
        interviewCheckPoint: '조선 공정 관리(생산관리)에서 선대 스케줄링과 블록 물류 동선의 최적화'
      }
    ],
    briefingSample: {
      title: '조선·해양 모닝 브리핑: 친환경 선박 슈퍼사이클의 모든 것',
      duration: '26:30',
      narrator: '해양산업 전문 앵커'
    }
  },
  {
    id: 'qa-qc',
    name: '품질관리·품질보증',
    englishName: 'QA & QC',
    icon: 'CheckCircle2',
    description: '공정 능력 지수(Cpk), 식스시그마(6-Sigma), ISO 9001/IATF 16949 인증, 부품 신뢰성 시험 규격',
    focusKeywords: ['Cpk 지수', 'IATF 16949', 'FMEA', '신뢰성 가속시험', '불량 원인 규명'],
    recentIssuesCount: 18,
    featuredCompanies: ['현대모비스', 'LG이노텍', '삼성전기', '한국품질재단'],
    keyIssues: [
      {
        id: 'qa-1',
        title: '차량용 반도체 및 전장 부품 무결점(Zero Defect) 품질 보증 기준 강화',
        summary: '자율주행 안전 등급(ASIL-D) 충족을 위한 설계 FMEA(고장형태영향분석) 및 고온·고습 가속 수명 시험 필수화.',
        interviewCheckPoint: '신뢰성 시험 데이터 통계 분석과 클레임 발생 시 8D 보고서 작성 프로세스'
      },
      {
        id: 'qa-2',
        title: '공정 능력 지수(Cpk 1.67 이상) 확보를 위한 실시간 SPC 시스템 구축',
        summary: '로트(Lot) 간 편차를 최소화하고 측정 시스템 분석(MSA)을 통한 계측 신뢰도 제고.',
        interviewCheckPoint: '품질 직무 실무 질문: Cp와 Cpk의 차이 및 공정 중심 이동 시 개선 대책'
      }
    ],
    briefingSample: {
      title: '품질 직무 실무 브리핑: IATF 16949와 FMEA 실전 적용',
      duration: '28:45',
      narrator: '품질 명장 특별 게스트'
    }
  },
  {
    id: 'production-process',
    name: '생산기술·공정관리',
    englishName: 'Production & Process Tech',
    icon: 'Settings2',
    description: '라인 밸런싱(Line Balancing), 사이클 타임(CT) 단축, 수율 개선, 설비 셋업 최적화 및 원가 혁신',
    focusKeywords: ['라인 밸런싱', '택트 타임(Tact Time)', '수율 극대화', 'OEE(종합설비효율)', '공정 개선'],
    recentIssuesCount: 20,
    featuredCompanies: ['현대자동차', '삼성전자 DS', 'LG전자 H&A', 'SK하이닉스'],
    keyIssues: [
      {
        id: 'pp-1',
        title: '신차 양산 램프업(Ramp-up) 기간 단축을 위한 가상 공정 시뮬레이션',
        summary: '양산 설비 설치 전 3D 시뮬레이션을 통해 간섭 체크 및 작업자 동선 최적화로 셋업 기간 40% 단축.',
        interviewCheckPoint: '생산기술 직무에서 양산성 검토(DFM)와 초기 유동 관리 프로세스의 역할'
      },
      {
        id: 'pp-2',
        title: '병목 공정(Bottleneck) 해소를 통한 종합설비효율(OEE) 85% 달성 전략',
        summary: '작업 분배 재조정과 신속 금형 교체(SMED) 기법 적용으로 비가동 손실 최소화.',
        interviewCheckPoint: '택트 타임과 사이클 타임 계산법 및 라인 밸런스 효율 향상 방안 제시'
      }
    ],
    briefingSample: {
      title: '생산기술 합격 브리핑: OEE 개선과 양산 라인 셋업 핵심',
      duration: '30:20',
      narrator: '공정 기술 컨설턴트'
    }
  },
  {
    id: 'chemical-petro',
    name: '화학·정유·석유화학',
    englishName: 'Chemical & Refining',
    icon: 'FlaskConical',
    description: '정제마진 스프레드, 에틸렌·프로필렌 NCC 구조조정, 친환경 바이오 플라스틱, 수소 및 CCUS',
    focusKeywords: ['복합 정제마진', 'NCC 크래커', '친환경 바이오케미칼', 'CCUS', '스페셜티 화학'],
    recentIssuesCount: 17,
    featuredCompanies: ['LG화학', '롯데케미칼', 'SK이노베이션', 'S-Oil', '한화솔루션'],
    keyIssues: [
      {
        id: 'cp-1',
        title: '중국발 범용 석유화학 공급과잉 속 국내사 스페셜티·고기능성 소재 재편',
        summary: '에틸렌 마진 급감에 따라 반도체용 초고순도 케미칼, 배터리 분리막 바인더 등 고부가 제품 집중.',
        interviewCheckPoint: 'NCC(나프타 분해 설비) 원가 경쟁력과 에틸렌-스프레드 사이클 읽는 법'
      },
      {
        id: 'cp-2',
        title: 'SAF(지속가능 항공유) 및 바이오 나프타 공정 상용화',
        summary: '글로벌 항공 탄소 규제에 맞춰 폐식용유 등 바이오 원료 기반 정제 공정 신규 라인 투자 본격화.',
        interviewCheckPoint: '정유사의 탈정유 포트폴리오 다각화(수소, 바이오연료) 전략 분석'
      }
    ],
    briefingSample: {
      title: '화학·정유 출퇴근 오디오: 스페셜티 전환과 SAF 트렌드',
      duration: '27:10',
      narrator: '정유화학 애널리스트'
    }
  },
  {
    id: 'materials-supply-chain',
    name: '원자재·글로벌 공급망',
    englishName: 'Raw Materials & Global Supply Chain',
    icon: 'Globe2',
    description: '핵심 광물(리튬, 니켈, 희토류) 조달 다변화, 미·중 수출 통제 리스크, 물류 운임 지수(SCFI)',
    focusKeywords: ['핵심광물법', '희토류 수출 통제', '상하이컨테이너운임지수(SCFI)', '공급망 다변화', '니어쇼어링'],
    recentIssuesCount: 16,
    featuredCompanies: ['LX인터내셔널', '포스코인터내셔널', '현대글로비스', 'HMM'],
    keyIssues: [
      {
        id: 'ms-1',
        title: '미국 IRA 및 핵심원자재법(CRMA) 충족을 위한 비중국 광물 밸류체인',
        summary: '호주, 아프리카, 남미 광산 지분 투자 및 현지 제련소 합작을 통한 원산지 규정 충족 프로젝트 확대.',
        interviewCheckPoint: '글로벌 통상 규제 변경이 원가 및 재고 관리에 미치는 파급 효과'
      },
      {
        id: 'ms-2',
        title: '수에즈 운하·홍해 지정학적 위기로 인한 해상 물류 운임 변동성',
        summary: '희망봉 우회 항로 채택에 따른 리드 타임 증가와 안전재고(Safety Stock) 확대 운용.',
        interviewCheckPoint: '구매·물류 직무 관점에서 S&OP(판매 및 운영 계획) 최적화 방법'
      }
    ],
    briefingSample: {
      title: '공급망 브리핑: 핵심 광물 조달 리스크와 글로벌 해상 물류',
      duration: '26:50',
      narrator: '글로벌 공급망 분석관'
    }
  },
  {
    id: 'policy-economy',
    name: '산업 정책·경제·환율·관세',
    englishName: 'Policy, Economy & FX',
    icon: 'TrendingUp',
    description: '기준금리 인하 기조, 원/달러 고환율 수혜·피해 업종, 미국 관세 정책 변화, 정부 첨단전략산업 지원',
    focusKeywords: ['원/달러 환율', '미국 수입 관세', '기준금리', '국가첨단전략산업법', '세액공제'],
    recentIssuesCount: 25,
    featuredCompanies: ['한국은행', '기획재정부', '산업통상자원부', 'KOTRA'],
    keyIssues: [
      {
        id: 'pe-1',
        title: '환율 1,380~1,400원대 고착화가 수출 대기업과 내수 중견기업에 미치는 영향',
        summary: '자동차·조선 등 수출 중심 기업 환차익 반사이익 vs 원자재 수입 의존 철강·항공·정유사 금융비용 부담.',
        interviewCheckPoint: '환율 변동 시 각 산업군별 손익분기점(BEP) 영향 및 헷징 전략 질문 대비'
      },
      {
        id: 'pe-2',
        title: '주요 교역국 보호무역주의 강화와 품목별 상호 관세 리스크',
        summary: '철강, 완성차, 태양광 패널 등에 부과되는 고율 관세 장벽에 대비한 현지 생산 시설 투자 촉진.',
        interviewCheckPoint: '수출 주도형 한국 경제 구조에서 무역 통상 이슈를 분석하는 논리적 프레임워크'
      }
    ],
    briefingSample: {
      title: '거시경제 브리핑: 고환율과 글로벌 관세 정책 시나리오',
      duration: '31:10',
      narrator: '경제 전문 에디터'
    }
  },
  {
    id: 'earnings-investment',
    name: '기업 실적·투자',
    englishName: 'Earnings & CapEx',
    icon: 'BarChart3',
    description: '주요 상장사 분기 어닝 시즌 분석, 설비투자(CapEx) 계획, R&D 지출 비중, 영업이익률 추이',
    focusKeywords: ['어닝 서프라이즈', '설비투자(CapEx)', '영업이익률(OPM)', 'R&D 투자', '현금흐름'],
    recentIssuesCount: 21,
    featuredCompanies: ['삼성전자', '현대자동차', 'SK하이닉스', 'LG에너지솔루션', 'NAVER'],
    keyIssues: [
      {
        id: 'ei-1',
        title: '반도체·자동차 제조사 분기 영업이익률 회복과 미래 R&D 투자 배분',
        summary: '수익성 방어를 위해 비핵심 자산 매각 및 차세대 고부가 AI·친환경 원천 기술에 CapEx 집중.',
        interviewCheckPoint: '기업 재무제표(손익계산서, 현금흐름표)를 통해 기업의 투자 여력 판단하기'
      },
      {
        id: 'ei-2',
        title: '국내외 설비투자 축소 조정 속 선별적 거점 증설 전략',
        summary: '무분별한 증설 대신 북미 현지 합작법인(JV) 등 실질 보조금 수혜 지역에 집중 투자.',
        interviewCheckPoint: '대규모 CapEx 집행 이후 감가상각비 증가가 손익에 미치는 영향 이해'
      }
    ],
    briefingSample: {
      title: '실적 분석 모닝 브리핑: 3분기 어닝 서프라이즈와 2026 CapEx',
      duration: '29:40',
      narrator: '금융투자 산업 애널리스트'
    }
  },
  {
    id: 'hiring-trends',
    name: '기업 채용·취업 동향',
    englishName: 'Recruitment & Job Trends',
    icon: 'Briefcase',
    description: '수시 채용 트렌드, 직무 중심(JD) 평가, AI 역량 검사 및 직무 면접 기출 경향, 인턴십 전환율',
    focusKeywords: ['직무 중심 채용', 'AI 면접', '수시 채용', '직무 기술서(JD)', '기술 면접'],
    recentIssuesCount: 30,
    featuredCompanies: ['삼성그룹', '현대차그룹', 'SK그룹', 'LG그룹', '포스코그룹'],
    keyIssues: [
      {
        id: 'ht-1',
        title: '대기업 채용 프로세스 변화: 직무 적합성(Job-fit) 심층 면접 비중 대폭 확대',
        summary: '스펙 위주 정량 평가 탈피, 현장 문제 해결 시뮬레이션 및 직무 프로젝트 경험 중심 다대일 기술 면접 도입.',
        interviewCheckPoint: '자기소개서 작성 시 STAR 기법(상황-과제-행동-결과)과 산업 지식 융합 전략'
      },
      {
        id: 'ht-2',
        title: 'R&D 및 엔지니어링 직군 채용 시 산학 연계 인턴십 필수화 추세',
        summary: '단기 실무 경험을 통해 조직 적응력과 실무 도구(CAD, MATLAB, Python 등) 활용 능력을 사전 검증.',
        interviewCheckPoint: '대학 전공 프로젝트와 현업 공정 프로세스 간의 연결고리 어필 방법'
      }
    ],
    briefingSample: {
      title: '취준생 필청 브리핑: 2026 주요 대기업 직무 면접 트렌드',
      duration: '32:15',
      narrator: '대기업 채용팀 출신 멘토'
    }
  },
  {
    id: 'esg-carbon',
    name: 'ESG·탄소중립',
    englishName: 'ESG & Decarbonization',
    icon: 'Leaf',
    description: 'RE100 달성 이행률, Scope 3 온실가스 배출량 산정, 지속가능경영보고서 공시 의무화',
    focusKeywords: ['Scope 3', 'RE100', 'ESG 정보공시', '탄소중립 로드맵', '공급망 실사법'],
    recentIssuesCount: 19,
    featuredCompanies: ['SK', '포스코홀딩스', 'LG화학', '현대제철'],
    keyIssues: [
      {
        id: 'esg-1',
        title: '협력사 공급망 Scope 3 탄소 배출량 실사 및 감축 지원 프로그램',
        summary: '1차 협력사뿐 아니라 원자재 공급망 전체의 탄소 발자국 추적 및 탄소 회계 인프라 보급 가속화.',
        interviewCheckPoint: '기업 면접에서 Scope 1, 2, 3의 차이 및 제조업 Scope 3 감축 현실적 대안'
      },
      {
        id: 'esg-2',
        title: '국내외 ESG 공시 의무화 로드맵과 그린워싱 방지 가이드라인',
        summary: 'K-ESG 가이드라인과 IFRS 지속가능성 공시 기준에 따른 재무적 영향 수치화 보고서 발간 의무화.',
        interviewCheckPoint: 'ESG 투자가 기업의 자본 조달 비용(신용등급)에 미치는 실질적 혜택'
      }
    ],
    briefingSample: {
      title: 'ESG 오디오 브리핑: Scope 3 산정과 공급망 실사법 대비',
      duration: '24:50',
      narrator: 'ESG 전문 컨설턴트'
    }
  }
];

export const MORNING_COMMUTE_BRIEFING: BriefingItem = {
  id: 'briefing-morning-today',
  type: 'morning',
  title: '오늘 아침 30분 출근 브리핑',
  subtitle: '반도체 HBM4 공급망 재편 & 완성차 하이브리드 전략 & 철강 CBAM 대응',
  targetCommuteMinutes: 30,
  date: '2026년 11월 3일 (화)',
  scheduledTime: '07:30 AM',
  narratorName: '산업 AI 수석 큐레이터 민서 & 준혁',
  categoryTags: ['반도체', '자동차·모빌리티', '철강·금속', '기업 채용'],
  totalDurationSec: 1780, // ~29분 40초
  isAvailable: true,
  statusBadge: '오늘 아침 07:15 생성 완료',
  highlightNotes: [
    '지하철·버스 출근길 30분 동안 딱 듣는 오늘의 5대 산업 이슈 완벽 요약',
    '이동 중 화면을 보지 않아도 이해하기 쉬운 대화형 스크립트 구성',
    '면접관이 자주 묻는 핵심 키워드 3가지 집중 해설 수록'
  ],
  chapters: [
    {
      id: 'm-ch-1',
      title: '오프닝 & 글로벌 야간 마켓 3분 요약',
      durationSec: 180,
      summary: '뉴욕 증시 필라델피아 반도체 지수 반등, 원/달러 1,385원선 추이 및 유가 동향 점검',
      keyTerm: '환율 및 원자재'
    },
    {
      id: 'm-ch-2',
      title: '반도체: HBM4 베이스 다이 파운드리 협업과 패키징 수율',
      durationSec: 480,
      summary: 'HBM4 16단 양산 일정과 TSV 하이브리드 본딩 도입 현황, 국내 주요 소부장 수혜 분석',
      keyTerm: 'HBM4 & 하이브리드 본딩'
    },
    {
      id: 'm-ch-3',
      title: '모빌리티: 하이브리드(HEV) 고수익 질주와 EREV 전환',
      durationSec: 420,
      summary: '완성차 3분기 실적을 견인한 고효율 하이브리드 라인업과 2026 차세대 주행거리 연장차 전략',
      keyTerm: 'EREV & 파워트레인 믹스'
    },
    {
      id: 'm-ch-4',
      title: '철강: EU CBAM 본격화에 맞선 저탄소 전기로 투자',
      durationSec: 400,
      summary: '탄소국경세 부과 대상 품목 확대에 따른 국내 고로 1위사의 수소환원제철 실증 로드맵',
      keyTerm: 'EU CBAM & 수소환원제철'
    },
    {
      id: 'm-ch-5',
      title: '취준생 1분 면접 팁 & 클로징',
      durationSec: 300,
      summary: '오늘 다룬 3대 산업 키워드를 자기소개서 지원동기 및 직무 면접에 연결하는 3가지 문장',
      keyTerm: '면접 응용 스킬'
    }
  ]
};

export const EVENING_COMMUTE_BRIEFING: BriefingItem = {
  id: 'briefing-evening-today',
  type: 'evening',
  title: '오늘 저녁 30분 퇴근 브리핑',
  subtitle: '국내 시장 마감 & K-방산 수출 낭보 & 배터리 ESS 수주 결산',
  targetCommuteMinutes: 30,
  date: '2026년 11월 3일 (화)',
  scheduledTime: '18:30 PM',
  narratorName: '산업 매크로 분석관 윤아 & 건우',
  categoryTags: ['방산·항공우주', '배터리·에너지', '산업 정책·경제', 'ESG·탄소중립'],
  totalDurationSec: 1820, // ~30분 20초
  isAvailable: true,
  statusBadge: '오늘 저녁 18:00 오픈 예정 (미리보기 제공)',
  highlightNotes: [
    '퇴근길 지하철에서 하루를 정리하는 30분 마켓 및 산업 결산',
    '방산 유럽 2차 계약 체결 분석 및 밸류체인 부품사 실적 전망',
    '내일 아침 취준생이 꼭 확인해야 할 주요 채용 및 경제 일정 캘린더'
  ],
  chapters: [
    {
      id: 'e-ch-1',
      title: '퇴근길 3분 마켓 브리프: 코스피·코스닥 수급 결산',
      durationSec: 200,
      summary: '외국인 기관 순매수 업종 분석, 방산 및 원자력 섹터 동반 강세 마감',
      keyTerm: '수급 분석'
    },
    {
      id: 'e-ch-2',
      title: '방산: 동유럽 현지 MRO 클러스터 수주 계약 심층 분석',
      durationSec: 520,
      summary: '단순 무기 수출에서 현지 기술 이전 및 후속 지원 유지보수(MRO) 연계 패키지 계약의 의미',
      keyTerm: '방산 MRO 비즈니스'
    },
    {
      id: 'e-ch-3',
      title: '배터리: AI 데이터센터 전력난 수혜, ESS 메가팩 대형 수주',
      durationSec: 460,
      summary: '전기차 캐즘을 상쇄하는 신재생 그리드 및 데이터센터 비상전원 ESS 공급량 급증세',
      keyTerm: '산업용 ESS'
    },
    {
      id: 'e-ch-4',
      title: '경제·환율: 원/달러 환율과 수출 기업 4분기 실적 전망',
      durationSec: 360,
      summary: '고환율 장기화에 따른 완성차·조선 환차익 호재와 항공·철강 원자재 결제 부담',
      keyTerm: '환율 영향도'
    },
    {
      id: 'e-ch-5',
      title: '내일의 취준 캘린더 & 오늘 하루 수고하셨습니다',
      durationSec: 280,
      summary: '내일 마감 주요 대기업 서류 접수 일정 및 경제지표 발표 프리뷰',
      keyTerm: '취준 캘린더'
    }
  ]
};

export const TODAY_INDUSTRY_NEWS: IndustryNewsItem[] = [
  {
    id: 'news-1',
    categoryId: 'semiconductor',
    categoryName: '반도체',
    title: 'HBM4 16단 양산 로드맵 확정… 파운드리 베이스 다이 채택 경쟁 격화',
    companyName: 'SK하이닉스 · 삼성전자',
    publishedAt: '오늘 06:45',
    readTime: '3분 소요',
    summary: '차세대 HBM4에서는 베이스 다이에 파운드리 최신 로직 공정이 적용되어 전력 효율이 25% 개선됩니다. 국내 양대 메모리사의 공급망 선점 전략이 가속화되고 있습니다.',
    jobSeekerTakeaway: '메모리-파운드리 융합 트렌드를 파악하고, 반도체 패키징 및 TSV 수율 관리 직무 인터뷰 답변으로 활용하세요.',
    sourceName: '전자신문 산업부',
    isHot: true
  },
  {
    id: 'news-2',
    categoryId: 'auto-mobility',
    categoryName: '자동차·모빌리티',
    title: '글로벌 완성차, 하이브리드 신차 10종 집중 투입… 수익성 9%대 수성',
    companyName: '현대자동차 · 기아',
    publishedAt: '오늘 07:10',
    readTime: '4분 소요',
    summary: '전기차 수요 둔화 시기에 하이브리드 파워트레인 효율을 극대화한 신차들이 북미·유럽 시장에서 호실적을 견인하며 사상 최대 영업이익을 기록 중입니다.',
    jobSeekerTakeaway: '완성차 파워트레인 다각화 전략(HEV + EV + EREV)과 생산 라인 혼류 생산 유연성의 가치를 설명할 수 있어야 합니다.',
    sourceName: '모빌리티 인사이트',
    isHot: true
  },
  {
    id: 'news-3',
    categoryId: 'defense-aerospace',
    categoryName: '방산·항공우주',
    title: 'K-방산, 유럽 루마니아와 자주포·장갑차 2조원대 후속 수출 본계약 체결',
    companyName: '한화에어로스페이스 · 현대로템',
    publishedAt: '오늘 07:40',
    readTime: '3분 소요',
    summary: '폴란드에 이어 루마니아 지상군 현대화 사업에서 K9 자주포 및 차륜형 장갑차가 최종 선정되어 장기 수주잔고를 탄탄히 확보했습니다.',
    jobSeekerTakeaway: '납기 준수율과 가성비, 현지화 서비스(MRO)가 K-방산의 초격차 경쟁력임을 방산 기업 면접에서 강조하세요.',
    sourceName: '국방안보경제'
  },
  {
    id: 'news-4',
    categoryId: 'steel-metal',
    categoryName: '철강·금속',
    title: '포스코, 광양 250만톤급 대형 전기로 착공… 저탄소 강재 생산 본격화',
    companyName: '포스코홀딩스',
    publishedAt: '오늘 08:05',
    readTime: '2분 소요',
    summary: '기존 고로 제철 대비 탄소 배출을 75%까지 감축할 수 있는 대형 전기로를 가동해 유럽 CBAM 규제 강재 납품 기준을 선제적으로 만족시킵니다.',
    jobSeekerTakeaway: '전통 제조 공정의 저탄소 혁신이 실제 기업의 수출 단가와 규제 리스크 방어에 직결되는 사례로 인용 가능합니다.',
    sourceName: '철강금속신문'
  },
  {
    id: 'news-5',
    categoryId: 'hiring-trends',
    categoryName: '기업 채용·취업 동향',
    title: '2026 주요 대기업 직무 중심 수시 채용 비율 70% 돌파… 실무 과제 검증 강화',
    companyName: '현대차 · SK · LG',
    publishedAt: '오늘 08:30',
    readTime: '4분 소요',
    summary: '일괄 공채보다 현업 팀이 직접 주관하는 직무 중심 수시 채용이 대세로 굳어졌습니다. 전공 프로젝트와 현업 문제 해결력이 핵심 당락 요소입니다.',
    jobSeekerTakeaway: '자신의 경험을 단순 나열하지 말고, 지원 직무의 최신 이슈(품질, 공정, 생산기술)와 어떻게 연결되는지 근거를 준비하세요.',
    sourceName: '커리어 트렌드',
    isHot: true
  }
];

export const TARGET_COMPANIES: TargetCompany[] = [
  {
    id: 'comp-1',
    name: '현대자동차',
    industryCategory: '자동차·모빌리티',
    industryId: 'auto-mobility',
    headquarters: '서울 서초구',
    hiringStatus: '수시채용',
    recentNewsCount: 12,
    keyPoints: [
      'SDV 소프트웨어 아키텍처 및 OS 내재화',
      '차세대 하이브리드(TMED-II) 시스템 개발',
      '전주 상용 수소 전기차 및 북미 조지아 메타플랜트 가동'
    ],
    isBookmarked: true,
    latestNews: [
      {
        title: '북미 하이브리드 판매 비중 역대 최고치 기록',
        date: '2026.11.02',
        topic: '실적'
      },
      {
        title: '신임 연구개발본부장, 자율주행 알고리즘 인재 채용 확대 선언',
        date: '2026.10.30',
        topic: '채용'
      }
    ]
  },
  {
    id: 'comp-2',
    name: 'SK하이닉스',
    industryCategory: '반도체',
    industryId: 'semiconductor',
    headquarters: '경기 이천시',
    hiringStatus: '상반기 공채 예정',
    recentNewsCount: 15,
    keyPoints: [
      'HBM3E 12단 및 HBM4 16단 세계 최초 양산',
      'MR-MUF 공정 고도화 및 하이브리드 본딩 도입',
      '용인 반도체 클러스터 1기 팹 착공 순항'
    ],
    isBookmarked: true,
    latestNews: [
      {
        title: '엔비디아 차세대 AI 가속기용 HBM4 독점 퀄 테스트 통과 임박',
        date: '2026.11.01',
        topic: '기술'
      },
      {
        title: '청주 M15X 신규 패키징 라인 장비 발주 개시',
        date: '2026.10.28',
        topic: '투자'
      }
    ]
  },
  {
    id: 'comp-3',
    name: '한화에어로스페이스',
    industryCategory: '방산·항공우주',
    industryId: 'defense-aerospace',
    headquarters: '경남 창원시',
    hiringStatus: '채용중',
    recentNewsCount: 8,
    keyPoints: [
      'K9 자주포 및 천무 다연장로켓 글로벌 수주 잔고 30조원 돌파',
      '누리호 차세대 발사체 총괄 체계 종합 기업',
      '무인 전투차량 및 드론 방어 체계 솔루션'
    ],
    isBookmarked: true,
    latestNews: [
      {
        title: '루마니아 자주포 현지 공동 생산 공장 부지 협약',
        date: '2026.11.02',
        topic: '수출'
      },
      {
        title: '생산기술 및 품질보증 신입·경력 대규모 채용 공고',
        date: '2026.10.27',
        topic: '채용'
      }
    ]
  },
  {
    id: 'comp-4',
    name: 'LG에너지솔루션',
    industryCategory: '배터리·에너지',
    industryId: 'battery-energy',
    headquarters: '서울 영등포구',
    hiringStatus: '수시채용',
    recentNewsCount: 10,
    keyPoints: [
      '북미 스텔란티스·혼다 합작공장(JV) 단계별 가동',
      'LFP 파우치 배터리 ESS 시장 점유율 확대',
      '차세대 건식 전극 공정 파일럿 테스트'
    ],
    isBookmarked: false,
    latestNews: [
      {
        title: '미국 빅테크 데이터센터 전력망에 2GWh ESS 공급 계약',
        date: '2026.11.01',
        topic: '수주'
      }
    ]
  },
  {
    id: 'comp-5',
    name: '포스코홀딩스',
    industryCategory: '철강·금속',
    industryId: 'steel-metal',
    headquarters: '경북 포항시',
    hiringStatus: '모니터링',
    recentNewsCount: 9,
    keyPoints: [
      '수소환원제철 실증 플랜트 데모 라인 건설',
      '리튬·니켈 이차전지 소재 공급망 수직계열화',
      '광양 대형 친환경 전기로 준공'
    ],
    isBookmarked: false,
    latestNews: [
      {
        title: '아르헨티나 리튬 염호 2단계 상업 생산 개시',
        date: '2026.10.29',
        topic: '원자재'
      }
    ]
  }
];

export const RECENT_AUDIO_HISTORY = [
  {
    id: 'hist-1',
    briefingId: 'briefing-morning-yesterday',
    title: '어제 출근 30분 브리핑: 반도체 GAA 공정과 조선 수주',
    date: '2026.11.02 (월)',
    playedDuration: '28분 10초 / 29분 15초',
    progressPercent: 96,
    isCompleted: true,
    categoryTag: '반도체·조선'
  },
  {
    id: 'hist-2',
    briefingId: 'briefing-evening-friday',
    title: '지난주 금요일 퇴근 결산: 환율 1,380원선과 자동차 3분기 실적',
    date: '2026.10.30 (금)',
    playedDuration: '18분 40초 / 30분 00초',
    progressPercent: 62,
    isCompleted: false,
    categoryTag: '자동차·환율'
  },
  {
    id: 'hist-3',
    briefingId: 'briefing-special-battery',
    title: '산업 스페셜: 2026 전고체 배터리와 리사이클링 밸류체인',
    date: '2026.10.29 (목)',
    playedDuration: '22분 15초 / 22분 15초',
    progressPercent: 100,
    isCompleted: true,
    categoryTag: '배터리·에너지'
  }
];
