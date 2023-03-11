import type { TableProps } from 'antd';
import { Table } from 'antd';
import type { TablePaginationConfig } from 'antd/lib/table/interface';

type Props<T> = TableProps<T>;

export default function TableComponent<T extends object = any>(props: Props<T>) {
  const { pagination = {}, ...otherProps } = props;

  let pageConfigs: TablePaginationConfig | false = false;

  if (pagination) {
    pageConfigs = {
      showTotal: (total: string | number) => {
        return `共${total}条数据`;
      },
      showQuickJumper: true,
      showSizeChanger: true,
      pageSizeOptions: ['10', '20', '50', '100'],
      position: ['bottomRight'],
      ...pagination,
    };
  }

  return <Table<T> pagination={pageConfigs} {...otherProps} />;
}
