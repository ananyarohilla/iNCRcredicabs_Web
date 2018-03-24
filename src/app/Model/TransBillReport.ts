

export class TransBillReport {
    constructor(
        public gstTax_unscheduled?: string,
        public Standby_Cab_Cost?: string,
        public toll_shift_cab?: string,
        public gps_shift_cab?: string,
        public Cost_of_Scheduled_Cabs?: string,
        public uptax_regular_cab?: string,
        public total_no_of_unscheduled_cabs?: string,
        public Scheduled_Cab_Cost?: string,
        public gstTax_shift_cab?: string,
        public uptax_shift_cab?: string,
        public Cost_of_Standby_Cab?: string,
        public Scheduled_Cab_Cost_less_Emp_Contribution?: string,
        public Cost_of_Cabs_for_Other_Purposes?: string,
        public total_no_shift_cab?: string,
        public vendor?: [{}],
        public escortGuardCost?: string,
        public Extra_Mileage_Cost?: string,
        public total_no_of_shift_employees?: string,
        public Shift_Cab_Cost_less_Emp_Contribution?: string,
        public Unscheduled_Cab_Costs?: string,
        public standByTax?: string,
        public otherCabGST?: string,
        public Transport_plus_Escort_Security?: string,
        public hrtax_regular_cab?: string,
        public total_no_of_regular_employees?: string,
        public Total_Transortation_Cost_for_the_Month?: string,
        public Total_Amount_Security_Guard?: string,
        public emp_contrib_shift?: string,
        public hrtax_shift_cab?: string,
        public Cost_of_Unscheduled_Cabs?: string,
        public total_no_regular_and_shift_cab?: string,
        public Shift_Cab_Cost?: string,
        public total_no_shift_cab_big?: string,
        public toll_unscheduled_cab?: string,
        public emp_contrib_regular?: string,
        public Escort_Security_Guards?: string,
        public total_no_regular_cab_big?: string,
        public Cost_of_Shift_Cabs?: string,
        public Cabs_for_Other_Purposes_Cost?: string,
        public escortGuardTaxes?: string,
        public total_no_shift_cab_small?: string,
        public gstTax_regular_cab?: string,
        public total_no_regular_cab?: string,
        public gps_regular_cab?: string,
        public escortGuardDropDutyCost?: string,
        public tptMobCost?: string,
        public total_no_regular_cab_small?: string,
        public foreignExPrice?:string,
        public Total_Transportation_Cost_for_the_Month?:string,
        public total_cost_regular_cab_small?:string,
        public total_cost_regular_cab_big?:string,
        public total_cost_shift_cab_small?:string,
        public total_cost_shift_cab_big?:string,
        public total_no_of_unscheduled_employees?:string,
        public overall_emp_contri?:string,
        public total_cost?:string,
    ) { }
}