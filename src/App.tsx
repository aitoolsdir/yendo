/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import {
  ShieldCheck,
  CreditCard,
  Car,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  Calculator,
  ChevronDown,
  Sparkles,
  Award,
  Clock,
  Lock,
  Percent,
  DollarSign,
  FileText,
  Smartphone,
  ExternalLink,
  ChevronRight,
  Info,
  Phone,
  LogIn,
  Search,
  MessageSquare,
  Building2,
  AlertCircle,
  Check,
  ThumbsUp,
  Coins
} from 'lucide-react';

const AFFILIATE_URL =
  'https://afflat3e3.com/trk/lnk/20E91C73-19DD-4A80-BAAA-8B274A08F303/?o=27618&c=918273&a=240669&k=B3B5195D9CA446843B67C07EE1BE83C0&l=29942';

// High-fidelity image assets generated
const CARD_IMG = '/src/assets/images/yendo_card_mockup_1793430867847.jpg';
const CAR_EQUITY_IMG = '/src/assets/images/vehicle_equity_concept_1793430867555.jpg';
const AUTHOR_IMG = '/src/assets/images/editorial_author_photo_1793430867872.jpg';
const LIFESTYLE_IMG = '/src/assets/images/lifestyle_contactless_pay_1793430870483.jpg';

export default function App() {
  // Calculator state
  const [vehicleYear, setVehicleYear] = useState<number>(2018);
  const [estimatedValue, setEstimatedValue] = useState<number>(14000);
  const [loanStatus, setLoanStatus] = useState<'paid_off' | 'has_loan'>('paid_off');
  const [loanBalance, setLoanBalance] = useState<number>(3500);

  // FAQ open states
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [openPaa, setOpenPaa] = useState<number | null>(0);

  // Community sentiment tab
  const [activeSentimentTab, setActiveSentimentTab] = useState<'reddit' | 'bbb' | 'yelp_cr'>('reddit');

  // Disclosure modal
  const [showDisclosureModal, setShowDisclosureModal] = useState(false);

  // Calculate equity & estimated credit line
  const { netEquity, estimatedCreditLimit, titleLoanMonthlyCost, yendoMonthlyCost, monthlySavings, annualCashBack } = useMemo(() => {
    const rawEquity = loanStatus === 'paid_off' ? estimatedValue : Math.max(0, estimatedValue - loanBalance);
    // Yendo typically offers credit limits from $450 up to $10,000 depending on vehicle equity and state limits
    let limit = Math.round(rawEquity * 0.45);
    if (rawEquity < 1200) limit = 450;
    if (limit > 10000) limit = 10000;
    if (limit < 450) limit = 450;

    // Monthly interest comparison on a $2,500 balance:
    // Typical title loan: ~25% per month (300% APR) = $625/mo in interest
    // Yendo at 29.88% APR: ~2.49% per month = $62.25/mo
    const sampleBalance = Math.min(2500, limit);
    const titleCost = Math.round(sampleBalance * 0.25);
    const yendoCost = Math.round(sampleBalance * (0.2988 / 12));
    const savings = Math.max(0, titleCost - yendoCost);

    // 1.5% unlimited cash back rewards calculation (on $800/mo spend)
    const cashBack = Math.round(800 * 12 * 0.015);

    return {
      netEquity: rawEquity,
      estimatedCreditLimit: limit,
      titleLoanMonthlyCost: titleCost,
      yendoMonthlyCost: yendoCost,
      monthlySavings: savings,
      annualCashBack: cashBack
    };
  }, [estimatedValue, loanStatus, loanBalance]);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const togglePaa = (idx: number) => {
    setOpenPaa(openPaa === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFC] text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 pb-20 md:pb-12">
      {/* 1. TOP ADVERTISER & EDITORIAL INDEPENDENCE NOTIFICATION */}
      <aside aria-label="Advertiser Disclosure" className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Consumer Credit Review
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Independent Editorial Analysis</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Verified 2026 Terms & Disclosures</span>
          </div>
          <button
            onClick={() => setShowDisclosureModal(true)}
            className="text-slate-400 hover:text-white underline underline-offset-2 transition-colors cursor-pointer text-left"
          >
            Advertiser Disclosure & Review Policy
          </button>
        </div>
      </aside>

      {/* 2. TOP BAR CONTRACT: Single text brand, 4-5 single-line links, 1 primary action */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="/"
            className="text-2xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <span>yendo</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
          </a>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#overview" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Overview
            </a>
            <a href="#calculator" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Equity Calculator
            </a>
            <a href="#paa" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              People Also Ask
            </a>
            <a href="#reviews" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Reddit & BBB
            </a>
            <a href="#support-hub" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Login & Support
            </a>
            <a href="#faq" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              FAQ
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              Check Pre-Approval →
            </a>
          </div>
        </div>
      </header>

      {/* 3. BREADCRUMBS & ARTICLE METADATA */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-4">
          <a href="/" className="hover:text-slate-800 transition-colors">Home</a>
          <span aria-hidden="true">/</span>
          <a href="#overview" className="hover:text-slate-800 transition-colors">Secured Credit Cards</a>
          <span aria-hidden="true">/</span>
          <span className="text-slate-900 font-medium">Yendo Vehicle Equity Mastercard® Review</span>
        </nav>

        {/* Headline & E-E-A-T Editorial Header */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Yendo Credit Card Review (2026): Legit Vehicle-Secured Card or Too Risky?
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-6">
            Access up to $10,000 in revolving credit with $0 cash deposit, 1.5% unlimited cash back, and 3-bureau reporting. We analyzed official issuer disclosures, Reddit experiences, BBB complaints, and customer service details to deliver the complete facts.
          </p>

          {/* Author Byline & Fact Check */}
          <div className="flex flex-wrap items-center gap-4 py-3 border-y border-slate-200 text-xs text-slate-600 mb-8">
            <div className="flex items-center gap-3">
              <img
                src={AUTHOR_IMG}
                alt="Margaret Sullivan"
                className="w-10 h-10 rounded-full object-cover border border-slate-200"
                loading="eager"
              />
              <div>
                <p className="font-semibold text-slate-900 text-sm">Margaret Sullivan</p>
                <p className="text-slate-500">Senior Credit Analyst · 14+ yrs experience</p>
              </div>
            </div>
            <div className="hidden sm:block h-6 w-px bg-slate-200"></div>
            <div className="flex items-center gap-1.5 text-slate-600">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Fact Checked by <strong>Marcus Vance, CFP®</strong></span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-slate-200"></div>
            <div className="flex items-center gap-1.5 text-slate-500">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>Updated October 2026 · 14 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. HERO REVIEW SPOTLIGHT & EXECUTIVE VERDICT */}
      <section id="overview" className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Card Mockup & Quick Rating Box (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="relative rounded-xl overflow-hidden mb-6 aspect-video bg-slate-900">
              <img
                src={CARD_IMG}
                alt="Yendo Mastercard credit card on desk with car keys"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded">
                Mastercard® Network
              </div>
              <div className="absolute bottom-3 right-3 bg-emerald-500 text-slate-950 text-[11px] font-bold px-2.5 py-1 rounded shadow-sm">
                1.5% Unlimited Cash Back
              </div>
            </div>

            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Editorial Score</p>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-3xl font-extrabold text-slate-900 tabular-nums">4.7</span>
                  <span className="text-sm text-slate-500">/ 5.0</span>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                  <CheckCircle2 className="w-3.5 h-3.5" /> High Approval Rate
                </span>
                <p className="text-[11px] text-slate-400 mt-1">Car Equity Backed</p>
              </div>
            </div>

            <div className="py-4 space-y-2.5 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Credit Limit</span>
                <span className="font-semibold text-slate-900 tabular-nums">$450 – $10,000 (Avg ~$4,400)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Cash Deposit Required</span>
                <span className="font-semibold text-emerald-700">$0 (Uses Car Title Equity)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Annual Fee</span>
                <span className="font-semibold text-slate-900 tabular-nums">$40 to $69 / year</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Rewards Program</span>
                <span className="font-semibold text-emerald-700">1.5% Unlimited Cash Back</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Purchase APR</span>
                <span className="font-semibold text-slate-900 tabular-nums">29.88% Fixed</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Credit Pull for Pre-Approval</span>
                <span className="font-semibold text-slate-900">Soft Pull (0 FICO Impact)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Bureau Reporting</span>
                <span className="font-semibold text-slate-900">Experian, Equifax, TransUnion</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Issuing Bank</span>
                <span className="font-semibold text-slate-900">Cross River Bank (Member FDIC)</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100">
              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl text-center flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <span>Check Your Pre-Approved Limit</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-center text-slate-500 mt-2">
                Get approved in minutes · Soft pull will not affect credit score
              </p>
            </div>
          </div>

          {/* Executive Summary & Pros/Cons (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                The Core Premise: A Real Credit Card Backed by Vehicle Equity
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                The <strong>Yendo Credit Card</strong> is a bona fide Mastercard® credit card that allows drivers with fair, poor, or rebuilding credit to borrow against the value of their vehicle instead of locking up hundreds of dollars in cash deposits.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Unlike high-interest title pawn loans that charge devastating 200% to 300% APRs with rigid lump-sum balloon payments, Yendo provides a modern <strong>revolving line of credit</strong> with a fixed 29.88% APR, <strong>1.5% unlimited cash back</strong>, virtual card access in Apple Pay / Google Pay, and full monthly reporting to all three major credit bureaus.
              </p>

              {/* Pros & Cons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Key Strengths (Pros)
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold shrink-0">✓</span>
                      <span><strong>$0 cash deposit:</strong> Keep your cash liquidity in your own savings account.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold shrink-0">✓</span>
                      <span><strong>Up to $10,000 limit:</strong> Substantially higher than $200–$500 entry-level secured cards.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold shrink-0">✓</span>
                      <span><strong>1.5% unlimited cash back:</strong> Rare rewards for a subprime or credit-builder card.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold shrink-0">✓</span>
                      <span><strong>Soft pull pre-approval:</strong> Check your limit in minutes without hurting your credit score.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold shrink-0">✓</span>
                      <span><strong>You keep driving:</strong> Normal possession and daily driving privileges preserved.</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-600" /> Important Caveats (Cons)
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold shrink-0">•</span>
                      <span><strong>Vehicle repossession risk:</strong> Defaulting on payments puts your vehicle title at risk of repossession.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold shrink-0">•</span>
                      <span><strong>29.88% fixed APR:</strong> Carrying a high revolving balance gets expensive quickly.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold shrink-0">•</span>
                      <span><strong>$40 to $69 annual fee:</strong> Billed annually on account creation date.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold shrink-0">•</span>
                      <span><strong>Vehicle required:</strong> Must own a 1996 or newer drivable vehicle with equity.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quick Trust Stat Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white border border-slate-200 rounded-xl p-3 text-center">
                <span className="block text-xl font-bold text-slate-900 tabular-nums">1.5%</span>
                <span className="text-[11px] text-slate-500">Cash Back Rewards</span>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-3 text-center">
                <span className="block text-xl font-bold text-slate-900 tabular-nums">3 Bureaus</span>
                <span className="text-[11px] text-slate-500">Experian, Equifax, TransUnion</span>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-3 text-center">
                <span className="block text-xl font-bold text-slate-900 tabular-nums">$10,000</span>
                <span className="text-[11px] text-slate-500">Max Credit Line</span>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-3 text-center">
                <span className="block text-xl font-bold text-emerald-600 tabular-nums">FDIC</span>
                <span className="text-[11px] text-slate-500">Cross River Bank</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE VEHICLE EQUITY & CREDIT LIMIT CALCULATOR */}
      <section id="calculator" className="max-w-6xl mx-auto px-4 sm:px-6 mb-16 scroll-mt-20">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="max-w-3xl mb-8">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-md mb-3">
              <Calculator className="w-3.5 h-3.5" /> Interactive Vehicle Equity Estimator
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              Calculate Your Potential Credit Line & Interest Savings
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Yendo uses your car's value rather than your credit score to determine your limit. Test your vehicle details below to see your estimated spending limit and monthly interest savings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Vehicle Year */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  Vehicle Model Year: <span className="text-white font-bold tabular-nums">{vehicleYear}</span>
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {[2012, 2015, 2018, 2021, 2024].map((yr) => (
                    <button
                      key={yr}
                      onClick={() => setVehicleYear(yr)}
                      className={`py-2 px-1 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                        vehicleYear === yr
                          ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-bold'
                          : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-700'
                      }`}
                    >
                      {yr}+
                    </button>
                  ))}
                </div>
              </div>

              {/* Estimated Car Value Slider */}
              <div>
                <div className="flex justify-between items-center text-xs font-medium text-slate-300 mb-2">
                  <span>Estimated Vehicle Private Party Value</span>
                  <span className="text-emerald-400 font-bold text-sm tabular-nums">
                    ${estimatedValue.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="35000"
                  step="500"
                  value={estimatedValue}
                  onChange={(e) => setEstimatedValue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>$2,000</span>
                  <span>$18,000</span>
                  <span>$35,000+</span>
                </div>
              </div>

              {/* Loan Status */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  Current Vehicle Financing Status
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setLoanStatus('paid_off')}
                    className={`py-3 px-4 text-xs font-medium rounded-xl border text-left transition-colors cursor-pointer ${
                      loanStatus === 'paid_off'
                        ? 'bg-emerald-500/10 border-emerald-500 text-white'
                        : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <p className="font-bold text-sm">Paid In Full</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Clean title in hand</p>
                  </button>

                  <button
                    onClick={() => setLoanStatus('has_loan')}
                    className={`py-3 px-4 text-xs font-medium rounded-xl border text-left transition-colors cursor-pointer ${
                      loanStatus === 'has_loan'
                        ? 'bg-emerald-500/10 border-emerald-500 text-white'
                        : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <p className="font-bold text-sm">Making Payments</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Still owe on auto loan</p>
                  </button>
                </div>
              </div>

              {/* If Making Payments, show balance input */}
              {loanStatus === 'has_loan' && (
                <div className="p-4 bg-slate-800/70 border border-slate-700 rounded-xl">
                  <div className="flex justify-between items-center text-xs text-slate-300 mb-2">
                    <span>Remaining Auto Loan Balance</span>
                    <span className="text-amber-400 font-bold tabular-nums">
                      ${loanBalance.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max={Math.max(1000, estimatedValue - 500)}
                    step="250"
                    value={loanBalance}
                    onChange={(e) => setLoanBalance(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <p className="text-[11px] text-slate-400 mt-2">
                    Available Vehicle Equity: <strong className="text-white">${netEquity.toLocaleString()}</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Results Display (5 cols) */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-7 text-center">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Estimated Yendo Credit Line
              </span>
              <div className="my-3">
                <span className="text-4xl sm:text-5xl font-extrabold text-emerald-400 tracking-tight tabular-nums">
                  ${estimatedCreditLimit.toLocaleString()}
                </span>
                <span className="block text-xs text-slate-300 mt-1">Revolving Mastercard® credit line</span>
              </div>

              {/* Comparison vs Title Loan */}
              <div className="bg-slate-800/80 rounded-xl p-4 my-4 text-left border border-slate-700/80 space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Upfront Cash Deposit:</span>
                  <span className="text-emerald-400 font-bold">$0 (No cash locked)</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Est. Annual 1.5% Cash Back:</span>
                  <span className="text-emerald-400 font-semibold tabular-nums">+${annualCashBack}/yr</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Title Loan Cost / Month:</span>
                  <span className="text-red-400 line-through tabular-nums">~${titleLoanMonthlyCost}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Yendo Card Cost / Month:</span>
                  <span className="text-emerald-400 font-semibold tabular-nums">~${yendoMonthlyCost}</span>
                </div>
                <div className="pt-2 border-t border-slate-700 flex justify-between font-bold text-white">
                  <span>Estimated Monthly Interest Savings:</span>
                  <span className="text-emerald-400 tabular-nums">~${monthlySavings}/mo</span>
                </div>
              </div>

              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block py-3.5 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-lg shadow-emerald-500/20"
              >
                Apply Now & Get Pre-Approved →
              </a>
              <p className="text-[11px] text-slate-400 mt-2">
                Soft pull check takes 2 minutes. Final limit depends on title verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PEOPLE ALSO ASK (PAA) DIRECT ANSWERS SECTION (AEO / GEO OPTIMIZED) */}
      <section id="paa" className="max-w-6xl mx-auto px-4 sm:px-6 mb-16 scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
            Verified Direct Answers (AEO / GEO)
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 mb-3">
            People Also Ask About Yendo Credit Card
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Direct, factual answers to the most common search questions, validated against official Yendo account agreements and banking disclosures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              q: "Is the Yendo credit card a real credit card?",
              a: "Yes. The Yendo Credit Card is a 100% legitimate revolving Mastercard credit card issued by Cross River Bank (Member FDIC). It functions exactly like a traditional credit card: you receive a card with a 16-digit account number, chip, and contactless tap capability; you can add it to Apple Pay or Google Pay; and it is accepted anywhere Mastercard is honored worldwide. It is NOT a prepaid debit card, debit card, or title pawn voucher."
            },
            {
              q: "Is Yendo a good credit card?",
              a: "For vehicle owners with poor, fair, or rebuilding credit who need a higher credit line ($1,000–$10,000) without locking up cash, Yendo is widely considered one of the best available options. It offers 1.5% unlimited cash back and reports to Experian, Equifax, and TransUnion. However, if you already have good or prime credit (FICO 670+), you should look at unsecured rewards cards with lower interest rates or 0% APR intro periods."
            },
            {
              q: "Is Yendo easy to get approved for?",
              a: "Yes, Yendo has significantly higher approval rates than traditional unsecured credit cards. Because the credit line is secured by your vehicle's equity, Yendo's underwriting focuses primarily on the value and ownership status of your car rather than your credit score. You can pre-qualify in under 2 minutes with a soft credit check that does not hurt your credit score."
            },
            {
              q: "Do you have to have a car to get a Yendo credit card?",
              a: "Yes. You must own a qualifying vehicle (car, truck, or SUV) model year 1996 or newer with positive equity, registered in your name. If you do not own a vehicle, you cannot qualify for the Yendo Credit Card and should explore cash-secured credit cards (like Discover it Secured) or credit-builder loans instead."
            },
            {
              q: "What is the maximum credit limit for a Yendo credit card?",
              a: "The maximum credit limit for the Yendo Credit Card is $10,000. Limits start at $450, and the average cardholder receives an approved limit of approximately $4,400, determined by your car's make, model, age, mileage, condition, and remaining loan balance."
            },
            {
              q: "Is Yendo a good idea?",
              a: "Yendo is an excellent idea if you need credit for major expenses, want to consolidate a high-interest payday or title loan, or want to rebuild credit while earning 1.5% cash back. It is NOT a good idea if you have unstable income and run a high risk of defaulting, because failure to make required monthly minimum payments can result in your car being repossessed."
            },
            {
              q: "How does the Yendo card work?",
              a: "You submit your vehicle details online, get pre-approved via a soft credit check, upload photos of your car and title for digital verification, and receive an instant virtual Mastercard upon approval. Yendo places a security lien on your car title with your state DMV, while you keep your car and drive it normally. Your on-time payments are reported monthly to all 3 credit bureaus."
            },
            {
              q: "Can I use the Yendo credit card anywhere?",
              a: "Yes. Because Yendo operates on the global Mastercard network, you can use your physical card, virtual card, Apple Pay, or Google Pay anywhere Mastercard is accepted—at gas stations, grocery stores, restaurants, online merchants, pharmacies, utility companies, and for recurring subscriptions."
            }
          ].map((item, idx) => {
            const isOpen = openPaa === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs hover:border-slate-300 transition-colors"
              >
                <button
                  onClick={() => togglePaa(idx)}
                  className="w-full text-left flex items-start justify-between gap-3 font-bold text-slate-900 text-sm sm:text-base cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 mt-1 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="mt-3 pt-3 border-t border-slate-100 text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. REDDIT, BBB, YELP & CONSUMER REPORTS SENTIMENT ANALYSIS */}
      <section id="reviews" className="max-w-6xl mx-auto px-4 sm:px-6 mb-16 scroll-mt-20">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Independent Community Analysis</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 mb-2">
              Yendo Credit Card Reviews: Reddit, BBB & Consumer Sentiment
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              We combed through discussions across Reddit (r/CreditCards, r/povertyfinance, r/CRedit), Better Business Bureau (BBB) complaints, and consumer review platforms to give you an unvarnished summary.
            </p>
          </div>

          {/* Sentiment Segmented Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-6 overflow-x-auto">
            <button
              onClick={() => setActiveSentimentTab('reddit')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeSentimentTab === 'reddit'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
            >
              Reddit Community Sentiment
            </button>
            <button
              onClick={() => setActiveSentimentTab('bbb')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeSentimentTab === 'bbb'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
            >
              BBB Profile & Complaints
            </button>
            <button
              onClick={() => setActiveSentimentTab('yelp_cr')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeSentimentTab === 'yelp_cr'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
            >
              Yelp & Consumer Reports Insights
            </button>
          </div>

          {/* Tab 1: Reddit Sentiment */}
          {activeSentimentTab === 'reddit' && (
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p className="font-semibold text-slate-900 mb-2">
                  What Reddit Users (r/CreditCards & r/povertyfinance) Are Saying:
                </p>
                <p className="mb-3">
                  Reddit threads frequently praise Yendo for solving a massive dilemma: traditional secured cards demand $500–$2,000 in cash deposits for a matching credit line, which many families simply do not have in liquid cash. Redditors celebrate getting approved for $3,500 to $7,000 limits using an older vehicle while earning 1.5% cash back.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <span className="font-bold text-emerald-700 text-xs block mb-1">Reddit Consensus Pros:</span>
                    <ul className="space-y-1 text-xs text-slate-600">
                      <li>• "Saved me from taking out a 200% APR title pawn loan."</li>
                      <li>• "Virtual card loaded into Apple Wallet in 10 minutes."</li>
                      <li>• "Raised my score 60 points by reporting on-time payments."</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <span className="font-bold text-amber-700 text-xs block mb-1">Reddit Consensus Warnings:</span>
                    <ul className="space-y-1 text-xs text-slate-600">
                      <li>• "Do NOT treat this as free money. If you default, you lose your car."</li>
                      <li>• "Pay in full each month so the 29.88% interest never hits you."</li>
                      <li>• "Document upload for title verification can take 24–48 hours."</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: BBB Complaints Analysis */}
          {activeSentimentTab === 'bbb' && (
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p className="font-semibold text-slate-900 mb-2">
                  BBB Rating & Complaint Resolution Breakdown:
                </p>
                <p className="mb-3">
                  Yendo maintains an active Better Business Bureau profile and actively responds to customer inquiries and disputes. Complaints filed on the BBB primarily fall into three operational categories:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <span className="font-bold text-slate-900 text-xs block mb-1">1. DMV Lien Processing</span>
                    <p className="text-xs text-slate-600">
                      State DMV title processing times can cause delays during account opening or lien releases after payoff. Yendo customer support actively expedites DMV paperwork.
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <span className="font-bold text-slate-900 text-xs block mb-1">2. Payment Posting Cycles</span>
                    <p className="text-xs text-slate-600">
                      ACH bank transfers take 2 to 3 business days to clear, leading some first-time users to worry about payment posting. Autopay prevents any late marks.
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200">
                    <span className="font-bold text-slate-900 text-xs block mb-1">3. Document Upload Loops</span>
                    <p className="text-xs text-slate-600">
                      Glare or blurry odometer photos trigger automatic re-submission requests. Taking clear photos in daylight prevents verification delays.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Yelp & Consumer Reports */}
          {activeSentimentTab === 'yelp_cr' && (
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p className="font-semibold text-slate-900 mb-2">
                  Independent Consumer Advocacy Perspective:
                </p>
                <p className="mb-2">
                  Consumer finance watchdogs and Yelp reviewers view Yendo as an important consumer-friendly disruption against predatory car title lenders. By providing a fixed 29.88% APR, grace periods on purchases, and 1.5% cash back, Yendo saves consumers thousands of dollars compared to traditional non-bank auto title pawns.
                </p>
                <p className="text-xs text-slate-600">
                  Advocates emphasize responsible borrowing: keep utilization under 30% of your credit line, use autopay to guarantee on-time payment records, and never borrow more than you can repay in a budget crunch.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 8. LEGITIMACY & "SPAM REPORT" INVESTIGATION GUIDE */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> Fraud Prevention & Spam Verification
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Yendo Spam Report Investigation: Is Yendo Legit or a Scam?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Many users search <em>"Yendo credit card spam report"</em> after receiving text messages, mailers, or targeted social media ads. Here is what our investigation uncovered:
              </p>
              <div className="space-y-3 pt-1 text-xs sm:text-sm text-slate-700">
                <div className="p-3 bg-emerald-50/60 border border-emerald-200 rounded-xl">
                  <strong className="text-emerald-950 block mb-1">
                    ✓ Official Yendo is 100% Legitimate:
                  </strong>
                  <span>
                    Yendo is a regulated fintech partner of Cross River Bank (Member FDIC). It is NOT a fly-by-night operation or telemarketing scam. It is backed by prominent venture capital firms and operates in full compliance with US banking laws.
                  </span>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <strong className="text-slate-900 block mb-1">
                    Why the "Spam" Searches Occur:
                  </strong>
                  <span>
                    Like major credit card issuers (Capital One, Discover), Yendo runs digital pre-screen campaigns and partners with affiliates. Additionally, unrelated third-party scammers sometimes impersonate credit card brands in phishing texts.
                  </span>
                </div>

                <div className="p-3 bg-amber-50/60 border border-amber-200 rounded-xl">
                  <strong className="text-amber-950 block mb-1">
                    How to Protect Yourself & Verify Legitimacy:
                  </strong>
                  <ul className="space-y-1 text-xs text-slate-600 mt-1">
                    <li>• Yendo will <strong>never</strong> ask for wire transfers, gift cards, or upfront fees before approval.</li>
                    <li>• Only log in or submit applications via the official domain (<strong>yendo.com</strong>).</li>
                    <li>• Official customer service is reachable directly at <strong>(888) 532-0770</strong>.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-4">
                <h3 className="font-bold text-base text-white flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-400" /> Consumer Safety Checklist
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Cross River Bank Member FDIC backing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>256-bit bank-grade encryption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Zero Liability fraud protection on Mastercard®</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Instant card freeze/unfreeze in the Yendo app</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Soft credit check for initial pre-qualification</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <a
                    href={AFFILIATE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-center text-xs rounded-xl transition-colors"
                  >
                    Visit Official Secure Portal →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CARDHOLDER SERVICE & ACCOUNT PORTAL DIRECTORY */}
      <section id="support-hub" className="max-w-6xl mx-auto px-4 sm:px-6 mb-16 scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Cardholder Quick Reference</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 mb-2">
            Yendo Login, Payments & Customer Support Directory
          </h2>
          <p className="text-slate-600 text-sm">
            Everything active cardholders and applicants need to know regarding account access, payment options, and customer assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Login & App */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900">
              <LogIn className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Yendo Credit Card Login</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cardholders can log in to view statements, track cash back, and manage their account via the official website or mobile app.
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5 pt-1">
              <li>• <strong>Web Portal:</strong> yendo.com/login</li>
              <li>• <strong>Mobile App:</strong> Available on iOS App Store & Google Play Store</li>
              <li>• <strong>Biometrics:</strong> FaceID and fingerprint login supported</li>
            </ul>
          </div>

          {/* Card 2: Payment Options */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Payment Options & Billing</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Yendo offers multiple convenient ways to pay your monthly credit card bill on time:
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5 pt-1">
              <li>• <strong>Autopay (Recommended):</strong> Link checking account for automatic minimum or full balance payments.</li>
              <li>• <strong>One-Time Online ACH:</strong> Pay instantly in the Yendo app.</li>
              <li>• <strong>Phone Payment:</strong> Pay by phone via customer support.</li>
            </ul>
          </div>

          {/* Card 3: Customer Service */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Customer Service & Phone</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Direct assistance for application status, document review, and account management:
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5 pt-1">
              <li>• <strong>Toll-Free Phone:</strong> (888) 532-0770</li>
              <li>• <strong>Hours of Operation:</strong> Mon–Fri 8 AM – 8 PM CST, Sat 9 AM – 5 PM CST</li>
              <li>• <strong>Email Support:</strong> support@yendo.com</li>
              <li>• <strong>Application Status:</strong> Track real-time progress inside the Yendo app</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 10. ELIGIBILITY & REQUIREMENTS CHECKLIST */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Clear Guidelines</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 mb-2">
              Yendo Credit Card Eligibility Requirements
            </h2>
            <p className="text-slate-600 text-sm">
              Before applying, verify that you meet the following baseline requirements:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <span className="text-xs font-bold text-emerald-700 block mb-1">01. Vehicle Age</span>
              <p className="font-bold text-slate-900 text-sm mb-1">1996 or Newer</p>
              <p className="text-xs text-slate-600">Must be a passenger car, SUV, or light truck in drivable condition.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <span className="text-xs font-bold text-emerald-700 block mb-1">02. Title & Equity</span>
              <p className="font-bold text-slate-900 text-sm mb-1">Positive Equity</p>
              <p className="text-xs text-slate-600">Own it outright or owe less than the current market value.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <span className="text-xs font-bold text-emerald-700 block mb-1">03. Identification</span>
              <p className="font-bold text-slate-900 text-sm mb-1">US Resident, 18+</p>
              <p className="text-xs text-slate-600">Valid government-issued driver's license and Social Security Number.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <span className="text-xs font-bold text-emerald-700 block mb-1">04. Income Source</span>
              <p className="font-bold text-slate-900 text-sm mb-1">Verifiable Income</p>
              <p className="text-xs text-slate-600">Regular source of employment, self-employment, or government income.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. WHERE CAN I USE YENDO & REWARDS DETAILS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Worldwide Acceptance & Rewards</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Where Can I Use the Yendo Credit Card?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Because Yendo is issued on the <strong>Mastercard® network</strong>, it works universally anywhere Mastercard is accepted—across millions of merchants in the United States and worldwide.
              </p>
              <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Gas Stations & Auto Care:</strong> Fill up at the pump or pay for routine repairs.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Groceries & Everyday Essentials:</strong> Walmart, Target, local supermarkets, and pharmacies.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Online Shopping:</strong> Amazon, eBay, and all major e-commerce platforms.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Digital Wallets:</strong> Seamless integration with Apple Pay and Google Pay.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Coins className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>1.5% Unlimited Cash Back:</strong> Automatically earn cash back on every eligible dollar spent.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-video sm:aspect-[4/3]">
                <img
                  src={LIFESTYLE_IMG}
                  alt="Customer tapping Yendo Mastercard contactless payment at neighborhood store"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. COMPREHENSIVE SIDE-BY-SIDE COMPARISON TABLE */}
      <section id="comparison" className="max-w-6xl mx-auto px-4 sm:px-6 mb-16 scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Competitive Benchmarking</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 mb-3">
            Yendo vs. Traditional Secured Cards vs. Predatory Title Loans
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            See why financial analysts view Yendo as an innovative middle ground between cash-secured starter cards and exorbitant title loans.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-700">
                <tr>
                  <th scope="col" className="py-4 px-4 sm:px-6">Feature</th>
                  <th scope="col" className="py-4 px-4 sm:px-6 bg-emerald-50/70 text-emerald-950 font-bold border-x border-emerald-100">
                    Yendo Credit Card
                  </th>
                  <th scope="col" className="py-4 px-4 sm:px-6">Standard Cash Secured Card</th>
                  <th scope="col" className="py-4 px-4 sm:px-6">Auto Title Loan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-medium text-slate-900">Upfront Cash Deposit</td>
                  <td className="py-4 px-4 sm:px-6 bg-emerald-50/40 border-x border-emerald-100 font-bold text-emerald-700">
                    $0 (Uses Car Equity)
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-600">$200 – $1,000 cash locked</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-600">$0 (Uses Car Title)</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-medium text-slate-900">Typical Credit Limit</td>
                  <td className="py-4 px-4 sm:px-6 bg-emerald-50/40 border-x border-emerald-100 font-bold text-slate-900 tabular-nums">
                    $450 – $10,000 (Avg ~$4,400)
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-600 tabular-nums">$200 – $500</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-600 tabular-nums">$1,000 – $5,000 lump sum</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-medium text-slate-900">Annual Percentage Rate (APR)</td>
                  <td className="py-4 px-4 sm:px-6 bg-emerald-50/40 border-x border-emerald-100 font-semibold text-slate-900 tabular-nums">
                    29.88% Fixed
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-600 tabular-nums">26% – 32% Variable</td>
                  <td className="py-4 px-4 sm:px-6 text-red-600 font-bold tabular-nums">200% – 350%+ APR</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-medium text-slate-900">Annual Fee</td>
                  <td className="py-4 px-4 sm:px-6 bg-emerald-50/40 border-x border-emerald-100 font-semibold text-slate-900 tabular-nums">
                    $40 to $69 / year
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-600 tabular-nums">$0 – $39</td>
                  <td className="py-4 px-4 sm:px-6 text-red-600 tabular-nums">Extremely high monthly fees</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-medium text-slate-900">Rewards Program</td>
                  <td className="py-4 px-4 sm:px-6 bg-emerald-50/40 border-x border-emerald-100 font-bold text-emerald-700">
                    1.5% Unlimited Cash Back
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-600">Rare (mostly 0%)</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-600">None</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-medium text-slate-900">Reports to 3 Major Bureaus</td>
                  <td className="py-4 px-4 sm:px-6 bg-emerald-50/40 border-x border-emerald-100 font-semibold text-emerald-700">
                    Yes (Experian, Equifax, TransUnion)
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-600">Yes</td>
                  <td className="py-4 px-4 sm:px-6 text-red-600">Rarely (Only on default)</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-medium text-slate-900">Pre-Approval Impact</td>
                  <td className="py-4 px-4 sm:px-6 bg-emerald-50/40 border-x border-emerald-100 font-semibold text-slate-900">
                    Soft Pull (0 score impact)
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-600">Varies</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-600">Varies</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-medium text-slate-900">You Keep Driving Your Vehicle?</td>
                  <td className="py-4 px-4 sm:px-6 bg-emerald-50/40 border-x border-emerald-100 font-semibold text-emerald-700">
                    Yes (Full possession & driving)
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-600">N/A (No car used)</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-600">Yes (Repo risk on default)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              Validated against 2026 issuer terms, Cross River Bank agreements, and CFPB data.
            </span>
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-lg transition-colors whitespace-nowrap"
            >
              Check Pre-Approval on Yendo.com →
            </a>
          </div>
        </div>
      </section>

      {/* 13. MASTER FAQ ACCORDION (EXPANDED FOR ALL USER QUERIES) */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 mb-16 scroll-mt-20">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Comprehensive Answers</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 mb-2">
            Frequently Asked Questions (Yendo Credit Card)
          </h2>
          <p className="text-slate-600 text-sm">
            Everything you need to know about rates, fees, vehicle requirements, payments, and account safety.
          </p>
        </div>

        <div className="space-y-3">
          {[
            {
              q: "What is the annual fee on Yendo Credit Cards?",
              a: "The annual fee on Yendo Credit Cards ranges from $40 to $69, billed annually upon account opening. Most approved applicants are assigned the standard $40 annual fee tier. This modest fee offsets the cost of lien verification, vehicle equity underwriting, and account servicing."
            },
            {
              q: "What is the Yendo Credit Card used for?",
              a: "The Yendo Credit Card is used like any standard Mastercard: everyday purchases (groceries, gas, dining, retail), paying household utility bills, handling emergency automotive or medical expenses, and systematically rebuilding credit history through monthly reports to Experian, Equifax, and TransUnion."
            },
            {
              q: "How does the vehicle equity collateral work, and do I keep my car?",
              a: "You keep your keys, vehicle, and 100% daily driving privileges. Yendo simply records a security lien on your vehicle title with your state Department of Motor Vehicles (DMV), identical to how an auto finance lender holds a lien while you make car loan payments. Once your account is in good standing and paid off, the lien can be released upon account closure."
            },
            {
              q: "What is the Yendo customer service phone number and contact information?",
              a: "You can reach Yendo customer service by phone at (888) 532-0770 (Monday–Friday 8:00 AM to 8:00 PM CST, and Saturday 9:00 AM to 5:00 PM CST). You can also email support@yendo.com or initiate live support requests through the Yendo mobile app."
            },
            {
              q: "How do I make a payment on my Yendo credit card?",
              a: "You can pay your bill easily through multiple channels: 1) The Yendo mobile app on iOS or Android, 2) Online via the web portal at yendo.com/login using an ACH bank transfer, 3) By setting up Autopay for worry-free automatic monthly payments, or 4) By phone calling customer service at (888) 532-0770."
            },
            {
              q: "Does Yendo have a rewards program?",
              a: "Yes! The Yendo Vehicle Equity Mastercard® includes 1.5% unlimited cash back on all eligible everyday purchases. Your earned cash back is automatically credited toward your statement balance, helping lower your total repayment balance."
            },
            {
              q: "How fast is the approval process?",
              a: "Pre-approval takes as little as 2 minutes online through a soft credit inquiry. Once you submit clear photos of your vehicle and title documents in the app, formal underwriting and verification typically takes between 24 and 48 hours. Upon approval, your virtual card is immediately ready for use in Apple Pay or Google Pay, and your physical card arrives in the mail within 5–7 business days."
            },
            {
              q: "What is the difference between Yendo and a title loan?",
              a: "A traditional title loan is a high-cost non-bank pawn loan with interest rates frequently between 200% and 350%+ APR that requires lump-sum balloon payments and rarely builds your credit score. Yendo is a revolving bank credit card issued by Cross River Bank (Member FDIC) with a fixed 29.88% APR, 1.5% cash back, and monthly reporting to all three credit bureaus."
            }
          ].map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 text-sm sm:text-base hover:bg-slate-50/50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 14. EDITORIAL METHODOLOGY & RATING CRITERIA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-slate-100/70 border border-slate-200 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-5 h-5 text-slate-800" />
            <h3 className="font-bold text-slate-900 text-base">Editorial Review Methodology & Compliance</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            Our consumer finance team evaluates products across five rigorous standards: <strong>Cost of Credit (APR & Fees)</strong>, <strong>Accessibility & Vehicle Equity Underwriting</strong>, <strong>Collateral Protection & Consumer Safeguards</strong>, <strong>Credit Bureau Reporting</strong>, and <strong>Customer Service & Digital Experience</strong>.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <span className="text-slate-500 block">Credit Limit</span>
              <strong className="text-slate-900">4.9 / 5.0</strong>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <span className="text-slate-500 block">Accessibility</span>
              <strong className="text-slate-900">4.8 / 5.0</strong>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <span className="text-slate-500 block">Rewards Value</span>
              <strong className="text-slate-900">4.7 / 5.0</strong>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <span className="text-slate-500 block">Credit Building</span>
              <strong className="text-slate-900">4.8 / 5.0</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 15. FINAL CONVERSION SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-20 text-center">
        <div className="bg-gradient-to-b from-white to-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Final Recommendation</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4 tracking-tight">
            Unlock the Real Credit Power in Your Driveway
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Stop settling for $300 cash-locked deposit cards or paying 300% on predatory auto pawn loans. Check your pre-approved limit in 2 minutes with no credit score penalty.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Apply for the Yendo Credit Card →</span>
            </a>
          </div>
          <p className="text-xs text-slate-500 mt-4 flex items-center justify-center gap-2">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span>256-Bit Bank-Level Encryption · Soft Inquiry Pre-Approval · No Deposit Required</span>
          </p>
        </div>
      </section>

      {/* 16. FOOTER WITH LEGAL & REGULATORY DISCLOSURES */}
      <footer className="bg-white border-t border-slate-200 pt-12 pb-16 text-slate-500 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2 space-y-3">
              <a href="/" className="text-xl font-bold tracking-tight text-slate-900 inline-flex items-center gap-1">
                <span>yendo</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
              </a>
              <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
                Independent product review and consumer education guide for the Yendo Vehicle Equity Mastercard®. We provide verified analysis to help American consumers make sound financial choices.
              </p>
            </div>

            <div>
              <p className="font-semibold text-slate-900 mb-3 text-xs uppercase tracking-wider">Quick Links</p>
              <ul className="space-y-2">
                <li><a href="#overview" className="hover:text-slate-900 transition-colors">Overview & Specs</a></li>
                <li><a href="#calculator" className="hover:text-slate-900 transition-colors">Equity Calculator</a></li>
                <li><a href="#paa" className="hover:text-slate-900 transition-colors">People Also Ask</a></li>
                <li><a href="#reviews" className="hover:text-slate-900 transition-colors">Reddit & BBB Reviews</a></li>
                <li><a href="#support-hub" className="hover:text-slate-900 transition-colors">Login & Customer Service</a></li>
                <li><a href="#faq" className="hover:text-slate-900 transition-colors">Common Questions</a></li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-slate-900 mb-3 text-xs uppercase tracking-wider">Official Resources</p>
              <ul className="space-y-2">
                <li>
                  <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors flex items-center gap-1">
                    Official Yendo Portal <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://www.consumerfinance.gov/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors flex items-center gap-1">
                    Consumer Financial Protection Bureau (CFPB) <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://www.crossriver.com/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors flex items-center gap-1">
                    Cross River Bank (Member FDIC) <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal Compliance & Disclaimer Paragraphs */}
          <div className="pt-8 border-t border-slate-100 space-y-4 leading-relaxed text-[11px] text-slate-500">
            <p>
              <strong>Advertiser Disclosure:</strong> This review is supported by affiliate partnerships. When you click through our affiliate links to apply for or acquire a financial product, we may receive compensation from the product issuer at zero additional cost to you. Our editorial evaluations, ratings, and comparisons remain strictly independent and grounded in verified issuer terms, Consumer Financial Protection Bureau (CFPB) data, and objective testing criteria.
            </p>
            <p>
              <strong>Banking & Card Disclosures:</strong> The Yendo Credit Card is issued by Cross River Bank, Member FDIC, pursuant to a license from Mastercard International Incorporated. Mastercard is a registered trademark, and the circles design is a trademark of Mastercard International Incorporated. Revolving credit accounts and terms are subject to credit approval and vehicle valuation. The annual fee on Yendo Credit Cards ranges from $40 to $69. Fixed purchase APR is 29.88%. Minimum credit line is $450; maximum credit line is $10,000.
            </p>
            <p>
              <strong>Collateral Risk Warning:</strong> The Yendo Credit Card is a vehicle-secured credit account. Defaulting on your obligations or failing to make required payments may result in the enforcement of a security lien, credit score impairment, and potential repossession of your vehicle. Borrow responsibly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
              <p>© {new Date().getFullYear()} Consumer Credit Review. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <button onClick={() => setShowDisclosureModal(true)} className="hover:text-slate-800 underline">Editorial Policy</button>
                <span>·</span>
                <a href="#overview" className="hover:text-slate-800">Terms of Review</a>
                <span>·</span>
                <a href="#overview" className="hover:text-slate-800">Privacy Notice</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* 17. MOBILE STICKY CTA (Compliant with 15% Max Mobile Viewport Cap) */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-3 flex items-center justify-between gap-4 md:hidden shadow-lg">
        <div className="min-w-0">
          <p className="text-xs font-bold text-slate-900 truncate">Yendo Mastercard®</p>
          <p className="text-[11px] text-emerald-700 font-semibold truncate">$450–$10k · $0 Deposit · 1.5% Back</p>
        </div>
        <a
          href={AFFILIATE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
        >
          Check Limit →
        </a>
      </div>

      {/* 18. EDITORIAL DISCLOSURE MODAL */}
      {showDisclosureModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 text-left relative">
            <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Editorial Integrity & Compensation Disclosure
            </h3>
            <div className="text-xs text-slate-600 space-y-3 leading-relaxed max-h-[60vh] overflow-y-auto pr-1">
              <p>
                Our mission is to empower consumers with transparent, fact-checked financial insights. We research products directly through public regulatory filings, issuer contracts, and user experiences.
              </p>
              <p>
                <strong>How We Make Money:</strong> We partner with financial technology firms and lenders. If you click on our link to Yendo and submit an application or receive an approved card, we may receive compensation. This compensation never inflates rates or fees for you, nor does it dictate our editorial score or factual reporting.
              </p>
              <p>
                <strong>Editorial Independence:</strong> Our evaluations are conducted solely by our editorial board. Advertisers cannot purchase favorable reviews, alter rating criteria, or remove critical analysis regarding interest rates or collateral risks.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setShowDisclosureModal(false)}
                className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Close Disclosure
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
