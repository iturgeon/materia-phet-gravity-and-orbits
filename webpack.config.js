const path = require('path')
const srcPath = path.join(__dirname, 'src') + path.sep
const outputPath = path.join(__dirname, 'build') + path.sep
const widgetWebpack = require('materia-widget-development-kit/webpack-widget')

const rules = widgetWebpack.getDefaultRules()

const ignoreCopy = [
	'**/*-strings_bo.json',
	'**/*-strings_bs.json',
	'**/*-strings_ar.json',
	'**/*-strings_ca.json',
	'**/*-strings_cs.json',
	'**/*-strings_da.json',
	'**/*-strings_el.json',
	'**/*-strings_de.json',
	'**/*-strings_es_ES.json',
	'**/*-strings_es_MX.json',
	'**/*-strings_es_PE.json',
	'**/*-strings_et.json',
	'**/*-strings_es.json',
	'**/*-strings_fr.json',
	'**/*-strings_eu.json',
	'**/*-strings_fi.json',
	'**/*-strings_gu.json',
	'**/*-strings_fa.json',
	'**/*-strings_gl.json',
	'**/*-strings_ga.json',
	'**/*-strings_hr.json',
	'**/*-strings_hi.json',
	'**/*-strings_hu.json',
	'**/*-strings_in.json',
	'**/*-strings_it.json',
	'**/*-strings_ja.json',
	'**/*-strings_iw.json',
	'**/*-strings_kk.json',
	'**/*-strings_km.json',
	'**/*-strings_ka.json',
	'**/*-strings_kn.json',
	'**/*-strings_lo.json',
	'**/*-strings_ko.json',
	'**/*-strings_mk.json',
	'**/*-strings_lv.json',
	'**/*-strings_mr.json',
	'**/*-strings_mn.json',
	'**/*-strings_nl.json',
	'**/*-strings_nb.json',
	'**/*-strings_or.json',
	'**/*-strings_pl.json',
	'**/*-strings_pt.json',
	'**/*-strings_pt_BR.json',
	'**/*-strings_nn.json',
	'**/*-strings_ru.json',
	'**/*-strings_si.json',
	'**/*-strings_sk.json',
	'**/*-strings_sl.json',
	'**/*-strings_sq.json',
	'**/*-strings_sr.json',
	'**/*-strings_sv.json',
	'**/*-strings_sw.json',
	'**/*-strings_ta.json',
	'**/*-strings_th.json',
	'**/*-strings_te.json',
	'**/*-strings_tk.json',
	'**/*-strings_tr.json',
	'**/*-strings_vi.json',
	'**/*-strings_zh_TW.json',
	'**/*-strings_zh_CN.json',
	'**/*.ai',
	'**/*.reason',
	'**/*.pdf',
	'**/*.less',
	'**/*.scss',
	'**/*.txt',
	'**/*.teml',
	'**/LICENSE',
	'**/*.md',
	'**/*.mp3',
	'**/*.wav',
	'**/katex.js',
	'**/katex.min.js',
	'**/katex-0.11.0.min.js',
	'**/sharpness-test-pattern.png',
	'**/matter-0.14.2.js',
	'**/mp2-0.7.1.js',
	'**/pixi-v3.0.0-rc1-dev.js',
	'**/three-r104.js',
	'**/three-r71.js',
	'**/three-r104.min.js',
	'**/gravity-and-orbits-screenshot.png',
	'**/assets/dot/doc/index.html',
	'**chrome-cursor-test.html',
	'**/fontawesome-webfont.svg',
	'**/p2-0.7.1.js',
	'**/gravity-and-orbits-screenshot-alt2.png',
	'**/d3-4.2.2.js',
	'**/planck-0.3.0-rc.2.js',
	'**/katex-0.11.0-css-all.js',
	'**/katex.mjs',
	'**/scenery-e8bb0c3.min.js',
	'**/gravity-and-orbits-screenshot-alt1.png',
	'**/4-28-2020_3.03.29_PM.json',
	'**/4-28-2020_3.03.29_PM.json',
	'**/mechamarkers-21f16221e414ec2dca68bbfbb866369eea7abd70.js'
]

const copy = [
	...widgetWebpack.getDefaultCopyList(),
    {
		from: path.join(__dirname, 'node_modules', "phet-gravity-and-orbits"),
		to: path.join(outputPath, 'assets', "gravity-and-orbits"),
		toType: 'dir',
		ignore: ignoreCopy
	},
    {
		from: path.join(__dirname, 'node_modules', "phet-assert"),
		to: path.join(outputPath, 'assets', "assert"),
		toType: 'dir',
		ignore: ignoreCopy
	},
    {
		from: path.join(__dirname, 'node_modules', "phet-axon"),
		to: path.join(outputPath, 'assets', "axon"),
		toType: 'dir',
		ignore: ignoreCopy
	},
    {
		from: path.join(__dirname, 'node_modules', "phet-babel"),
		to: path.join(outputPath, 'assets', "babel"),
		toType: 'dir',
		ignore: ignoreCopy
	},
    {
		from: path.join(__dirname, 'node_modules', "phet-brand"),
		to: path.join(outputPath, 'assets', "brand"),
		toType: 'dir',
		ignore: ignoreCopy
	},
    {
		from: path.join(__dirname, 'node_modules', "phet-chipper"),
		to: path.join(outputPath, 'assets', "chipper"),
		toType: 'dir',
		ignore: ignoreCopy
	},
    {
		from: path.join(__dirname, 'node_modules', "phet-dot"),
		to: path.join(outputPath, 'assets', "dot"),
		toType: 'dir',
		ignore: ignoreCopy
	},
    {
		from: path.join(__dirname, 'node_modules', "phet-joist"),
		to: path.join(outputPath, 'assets', "joist"),
		toType: 'dir',
		ignore: ignoreCopy
	},
    {
		from: path.join(__dirname, 'node_modules', "phet-kite"),
		to: path.join(outputPath, 'assets', "kite"),
		toType: 'dir',
		ignore: ignoreCopy
	},
    {
		from: path.join(__dirname, 'node_modules', "phet-phet-core"),
		to: path.join(outputPath, 'assets', "phet-core"),
		toType: 'dir',
		ignore: ignoreCopy
	},
    {
		from: path.join(__dirname, 'node_modules', "phet-phetcommon"),
		to: path.join(outputPath, 'assets', "phetcommon"),
		toType: 'dir',
		ignore: ignoreCopy
	},
    {
		from: path.join(__dirname, 'node_modules', "phet-phetmarks"),
		to: path.join(outputPath, 'assets', "phetmarks"),
		toType: 'dir',
		ignore: ignoreCopy
	},
    {
		from: path.join(__dirname, 'node_modules', "phet-query-string-machine"),
		to: path.join(outputPath, 'assets', "query-string-machine"),
		toType: 'dir',
		ignore: ignoreCopy
	},
    {
		from: path.join(__dirname, 'node_modules', "phet-scenery"),
		to: path.join(outputPath, 'assets', "scenery"),
		toType: 'dir',
		ignore: ignoreCopy
	},
    {
		from: path.join(__dirname, 'node_modules', "phet-scenery-phet"),
		to: path.join(outputPath, 'assets', "scenery-phet"),
		toType: 'dir',
		ignore: ignoreCopy
	},
    {
		from: path.join(__dirname, 'node_modules', "phet-sherpa"),
		to: path.join(outputPath, 'assets', "sherpa"),
		toType: 'dir',
		ignore: ignoreCopy
	},
    {
		from: path.join(__dirname, 'node_modules', "phet-sun"),
		to: path.join(outputPath, 'assets', "sun"),
		toType: 'dir',
		ignore: ignoreCopy
	},
    {
		from: path.join(__dirname, 'node_modules', "phet-tambo"),
		to: path.join(outputPath, 'assets', "tambo"),
		toType: 'dir',
		ignore: ignoreCopy
	},
    {
		from: path.join(__dirname, 'node_modules', "phet-tandem"),
		to: path.join(outputPath, 'assets', "tandem"),
		toType: 'dir',
		ignore: ignoreCopy
	},
    {
		from: path.join(__dirname, 'node_modules', "phet-utterance-queue"),
		to: path.join(outputPath, 'assets', "utterance-queue"),
		toType: 'dir',
		ignore: ignoreCopy
	}
]

const entries = {
	// 'common.css': [
	// 	path.join(srcPath, 'common.scss')
	// ],
	'player.css': [
		path.join(srcPath, 'player.html'),
		path.join(srcPath, 'player.scss'),
	],
	// 'creator.css': [
	// 	path.join(srcPath, 'creator.html'),
	// 	path.join(srcPath, 'creator.scss')
	// ],
	'player.js': [
		path.join(srcPath, 'player.js')
	],
	// 'creator.js': [
	// 	path.join(srcPath, 'creator.js')
	// ],
	// 'scoreScreen.js': [
	// 	path.join(srcPath, 'scoreScreen.js')
	// ],
	// 'scoreScreen.css': [
	// 	path.join(srcPath, 'scoreScreen.html'),
	// 	path.join(srcPath, 'scoreScreen.scss')
	// ],
	// 'guides/player.temp.html': [
	// 	path.join(srcPath, '_guides/player.md')
	// ],
	// 'guides/creator.temp.html': [
	// 	path.join(srcPath, '_guides/creator.md')
	// ]
}

const customRules = [
	rules.loadHTMLAndReplaceMateriaScripts,
	rules.loadAndPrefixCSS,
	rules.loadAndPrefixSASS,
	rules.loadAndCompileMarkdown,
	rules.copyImages
]

const options = {
	entries: entries,
	copyList: copy,
	moduleRules: customRules,
}

const buildConfig = widgetWebpack.getLegacyWidgetBuildConfig(options)


module.exports = buildConfig
