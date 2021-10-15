import React, { useMemo } from "react";
import { v4 as uuid } from "uuid";

export const Strong = ({ t }: { t: string }) => <strong>{t}</strong>;

export interface IRentReceiptProps {
  amount: string;
  tenantName: string;
  address: string;
  fromDt: string;
  toDt: string;
  landlordName: string;
  panNo: string;
  printOnly: boolean;
}

/**
 * The rent receipt
 */
export const RentReceipt: React.FC<IRentReceiptProps> = ({
  amount,
  tenantName,
  address,
  fromDt,
  toDt,
  landlordName,
  panNo,
  printOnly,
}) => {
  const { receiptNumber, wrapperClasses } = useMemo(
    () => ({
      receiptNumber: uuid().substr(-12),
      wrapperClasses: `overflow-auto d-print-block ${
        printOnly ? "d-none" : ""
      }`,
    }),
    [printOnly]
  );
  return (
    <div className={wrapperClasses}>
      <div
        className="border-2 border p-2 border-secondary"
        style={{ width: 700 }}
      >
        <div className="d-flex justify-content-between">
          <div>
            <h2>RENT RECEIPT</h2>
            <h6>October 2021</h6>
          </div>
          <div className="text-end">
            <div>
              <Strong t="Date: " />
              {toDt}
            </div>
            <div>
              <Strong t="Receipt No: " /> {receiptNumber}{" "}
            </div>
          </div>
        </div>
        <div className="my-4">
          Received sum of <Strong t={`₹ ${amount} `} />
          from <Strong t={tenantName} /> towards the rent and maintenance of
          property located at <Strong t={address} /> for the period from{" "}
          <Strong t={fromDt} /> to <Strong t={toDt} />.
        </div>
        <div className="mb-4">
          <strong>{landlordName} (Landlord)</strong>
        </div>{" "}
        <div>
          {" "}
          <strong>PAN No:</strong> {panNo}
        </div>
      </div>
    </div>
  );
};