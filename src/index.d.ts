interface Digit {
	Duration: number;
	Value: number;
	Labels: ReadonlyArray<TextLabel>;
	readonly CanvasTween: ReadonlyArray<Tween>;
}

interface NumberSpinnerInstance extends TextLabel {
	readonly Text: string;
	readonly CommaLabels: ReadonlyArray<TextLabel>;
	readonly Digits: ReadonlyArray<Digit>;
	readonly Frame: Frame;	

	/**
	 * Default “$”
	 * The string to show before the number
	 */
	Prefix: string;

	/**
	 * Default “”
	 * The string to show after the number
	 */
	Suffix: string;

	/**
	 * Default 2
	 * The number of decimal places that will be displayed
	 */
	Decimals: number;

	/**
	 * Default 0.3
	 * The time it takes to spin the number
	 */
	Duration: number;

	/**
	 * Default false
	 * Whether to insert commas in relevant places
	 */
	Commas: boolean;

	Value: number;
}

interface NumberSpinner {
	/**
	 * Creates a new Spinner object
	 */
	new(): NumberSpinnerInstance;

	/**
	 * Creates a new Spinner object with the properties of the given GuiObject
	 */
	fromGuiObject(GuiObject: GuiObject): NumberSpinnerInstance;
}

declare const NumberSpinner: NumberSpinner;

export = NumberSpinner;