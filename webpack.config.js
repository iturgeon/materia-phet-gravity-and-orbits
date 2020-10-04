const path = require('path')
const srcPath = path.join(__dirname, 'src') + path.sep
const outputPath = path.join(__dirname, 'build') + path.sep
const widgetWebpack = require('materia-widget-development-kit/webpack-widget')

const rules = widgetWebpack.getDefaultRules()
const copy = [
	...widgetWebpack.getDefaultCopyList(),
    {
		from: require.resolve("gravity-and-orbits"),
		to: path.join(outputPath, "gravity-and-orbits"),
		toType: 'dir'
    {
		from: require.resolve("assert"),
		to: path.join(outputPath, "assert"),
		toType: 'dir'
    {
		from: require.resolve("axon"),
		to: path.join(outputPath, "axon"),
		toType: 'dir'
    {
		from: require.resolve("babel"),
		to: path.join(outputPath, "babel"),
		toType: 'dir'
    {
		from: require.resolve("brand"),
		to: path.join(outputPath, "brand"),
		toType: 'dir'
    {
		from: require.resolve("chipper"),
		to: path.join(outputPath, "chipper"),
		toType: 'dir'
    {
		from: require.resolve("dot"),
		to: path.join(outputPath, "dot"),
		toType: 'dir'
    {
		from: require.resolve("joist"),
		to: path.join(outputPath, "joist"),
		toType: 'dir'
    {
		from: require.resolve("kite"),
		to: path.join(outputPath, "kite"),
		toType: 'dir'
    {
		from: require.resolve("phet-core"),
		to: path.join(outputPath, "phet-core"),
		toType: 'dir'
    {
		from: require.resolve("phetcommon"),
		to: path.join(outputPath, "phetcommon"),
		toType: 'dir'
    {
		from: require.resolve("phetmarks"),
		to: path.join(outputPath, "phetmarks"),
		toType: 'dir'
    {
		from: require.resolve("query-string-machine"),
		to: path.join(outputPath, "query-string-machine"),
		toType: 'dir'
    {
		from: require.resolve("scenery"),
		to: path.join(outputPath, "scenery"),
		toType: 'dir'
    {
		from: require.resolve("scenery-phet"),
		to: path.join(outputPath, "scenery-phet"),
		toType: 'dir'
    {
		from: require.resolve("sherpa"),
		to: path.join(outputPath, "sherpa"),
		toType: 'dir'
    {
		from: require.resolve("sun"),
		to: path.join(outputPath, "sun"),
		toType: 'dir'
    {
		from: require.resolve("tambo"),
		to: path.join(outputPath, "tambo"),
		toType: 'dir'
    {
		from: require.resolve("tandem"),
		to: path.join(outputPath, "tandem"),
		toType: 'dir'
    {
		from: require.resolve("utterance-queue"),
		to: path.join(outputPath, "utterance-queue"),
		toType: 'dir'
]

const entries = {
	// 'common.css': [
	// 	path.join(srcPath, 'common.scss')
	// ],
	// 'player.css': [
	// 	path.join(srcPath, 'player.html'),
	// 	path.join(srcPath, 'player.scss'),
	// ],
	// 'creator.css': [
	// 	path.join(srcPath, 'creator.html'),
	// 	path.join(srcPath, 'creator.scss')
	// ],
	// 'player.js': [
	// 	path.join(srcPath, 'player.js')
	// ],
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

const customReactLoader = {
	test: /\.js$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader'
	}
}

const customRules = [
	rules.loadHTMLAndReplaceMateriaScripts,
	rules.loadAndPrefixCSS,
	rules.loadAndPrefixSASS,
	rules.loadAndCompileMarkdown,
	rules.copyImages,
	customReactLoader
]

const options = {
	entries: entries,
	copyList: copy,
	moduleRules: customRules,
}

const buildConfig = widgetWebpack.getLegacyWidgetBuildConfig(options)

buildConfig.externals = {
	"react": "React",
	"react-dom": "ReactDOM"
}

module.exports = buildConfig
