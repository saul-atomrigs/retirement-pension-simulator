import { http, HttpResponse } from 'msw';
import { LiveStorage } from '@mswjs/storage';
import { nanoid } from 'nanoid';
import type { SimulationRequest } from '../types/simulation';

export const handlers = [
  // 1. 사용자 정보 조회
  http.get('/user', () => {
    return HttpResponse.json({
      id: nanoid(),
      firstName: 'John',
      lastName: 'Maverick',
      age: 30,
      retirementAge: 60,
      investmentStyle: 'balanced', // 안정형(stable) / 균형형(balanced) / 공격형(aggressive)
    });
  }),

  // 2. 연금 상품 목록 조회
  http.get('/pensions', () => {
    return HttpResponse.json([
      {
        id: nanoid(),
        name: '국민연금',
        type: '공적 연금',
        expectedReturn: 3.5,
        minAge: 18,
        maxAge: 60,
      },
      {
        id: nanoid(),
        name: '개인연금 (IRP)',
        type: '개인 연금',
        expectedReturn: 5.2,
        minAge: 20,
        maxAge: 65,
      },
      {
        id: nanoid(),
        name: '변액연금',
        type: '투자형 연금',
        expectedReturn: 7.8,
        minAge: 25,
        maxAge: 70,
      },
    ]);
  }),

  // 3. 연금 시뮬레이션 결과 조회
  http.post('/simulation', async ({ request }) => {
    const { age, retirementAge, monthlyInvestment } =
      (await request.json()) as SimulationRequest;

    // 가상의 수익률 로직 (간단한 복리 계산)
    const years = retirementAge - age;
    const expectedReturnRate = 5.5; // 평균 연금 수익률 (%)
    let totalAmount = 0;

    for (let i = 0; i < years; i++) {
      totalAmount =
        (totalAmount + monthlyInvestment * 12) * (1 + expectedReturnRate / 100);
    }

    return HttpResponse.json({
      totalYears: years,
      finalAmount: Math.round(totalAmount), // 예상 연금 금액
      expectedReturnRate,
    });
  }),
];
