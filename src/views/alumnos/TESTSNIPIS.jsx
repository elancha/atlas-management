import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CContainer,
  CModal,
} from '@coreui/react';

import { cilTrash, cilCommand, cilPenAlt } from '@coreui/icons';

import Formula from './Formulas.Modal';
import FormulaInfo from './FormulaInfo.Edit';
import FormulaRanges from './FormulaInfo.Ranges';
import ActionButton from 'src/components/ActionButton';

import { apiSlice } from 'src/store/apiSlice';
import { getUser, getSelectedTenant } from 'src/store/appSlice';
import {
  useDeleteFormulaMutation,
  useDeleteFormulaInfoMutation,
} from 'src/store/fcaApiSlice';

const Formulas = () => {
  const user = useSelector(getUser);
  const selectedTenant = useSelector(getSelectedTenant);

  const [formulas, setFormulas] = useState(null);
  const [formulaId, setFormulaId] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [openModalInfo, setOpenModalInfo] = useState(false);
  const [openModalRanges, setOpenModalRanges] = useState(false);

  const [getFormulas, { data: formulasList, isLoadingFormulas }] = apiSlice.useLazyGetFormulasQuery();
  const [getFormulasInfo, { data: formulasInfo, isLoadingFormulasInfo }] = apiSlice.useLazyGetFormulasInfoQuery();

  const [deleteFormula] = useDeleteFormulaMutation();
  const [deleteFormulaInfo] = useDeleteFormulaInfoMutation();

  const fetchData = () => {
    getFormulas({ tenantId: selectedTenant.tenantId }).then(formulasList => {
      getFormulasInfo({ tenantId: selectedTenant.tenantId }).then(formulasInfo => {
        const tmpstore = {};
        Object.entries(formulasList?.data  {}).forEach(([formulaKey, formulaValue]) => {
          tmpstore[formulaKey] = { formula: formulaValue };
          if (Object.keys(formulasInfo?.data  {}).includes(formulaKey)) {
            tmpstore[formulaKey].locales = formulasInfo.data[formulaKey].locales;
          }
        });
        setFormulas(tmpstore);
      });
    });
  }

  useEffect(() => {
    fetchData();
  }, [selectedTenant]);

  const editFormula = (formulaId) => {
    setFormulaId(formulaId);
    setOpenModal(true);
  };

  const triggerFormulaDeletion = async (formulaId) => {
    await deleteFormula({
      tenantId: selectedTenant.tenantId,
      formulaId,
    });
    await deleteFormulaInfo({
      tenantId: selectedTenant.tenantId,
      formulaId,
    });
    fetchData();
  };

  const addFormula = () => {
    setOpenModal(true);
    setFormulaId(undefined);
  };

  const closeModal = async () => {
    setOpenModal(false);
    setOpenModalInfo(false);
    setOpenModalRanges(false);
    fetchData();
  };

  const editFormulaInfo = (formulaId) => {
    setFormulaId(formulaId);
    setOpenModalInfo(true);
  };

  const editFormulaRanges = (formulaId) => {
    setFormulaId(formulaId);
    setOpenModalRanges(true);
  };
  const row = (key, formula) => {
    return (
      <CTableRow key={key}>
        <CTableHeaderCell scope="row">{key}</CTableHeaderCell>
        <CTableDataCell>
          {formula.locales && formula.locales.en ? formula.locales.en.description : ''}
        </CTableDataCell>
        <CTableDataCell className="overflow-text">{formula.formula}</CTableDataCell>
        <CTableDataCell align="middle">
          <ActionButton
            tooltipText="Edit formula"
            onClick={() => editFormula(key)}
            visible={user.isGlobalAdmin}
          />
          <ActionButton
            tooltipText="Edit info"
            icon={cilPenAlt}
            onClick={() => editFormulaInfo(key)}
          />
          <ActionButton
            tooltipText="Edit ranges"
            icon={cilCommand}
            onClick={() => editFormulaRanges(key)}
          />
          <ActionButton
            tooltipText="Delete formula"
            icon={cilTrash}
            className="text-danger"
            onClick={() => triggerFormulaDeletion(key)}
            visible={user.isGlobalAdmin}
          />
        </CTableDataCell>
      </CTableRow>
    );
  };

  return (
    <>
      <CCard>
        <CCardHeader align="middle">
          <strong>Secondary analysis formulas</strong>
        </CCardHeader>
        <CCardBody>
          <CTable hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col" className="w-auto">
                  Name
                </CTableHeaderCell>
                <CTableHeaderCell scope="col" className="w-auto">
                  Description
                </CTableHeaderCell>
                <CTableHeaderCell scope="col" className="w-auto">
                  Formula
                </CTableHeaderCell>
                <CTableHeaderCell scope="col" className="w-15">
                  Actions
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {formulas && Object.keys(formulas).map((key) => row(key, formulas[key]))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
      <CContainer className="d-grid gap-2 d-md-flex justify-content-md-end p-2">
        <CButton className="me-md-2" color="primary" type="button" onClick={() => addFormula()}>
          Add Formula
        </CButton>
      </CContainer>

      <CModal size="lg" visible={openModal} backdrop="static" onClose={() => setOpenModal(false)}>
        <Formula formulaId={formulaId} closeModal={() => closeModal()} />
      </CModal>

      <CModal
        size="lg"
        visible={openModalInfo}
        backdrop="static"
        onClose={() => setOpenModalInfo(false)}>
        <FormulaInfo
          formulaId={formulaId}
          closeModal={() => closeModal()}
          formulasList={Object.keys(formulas || {})
            .filter((x) => x != formulaId)
            .map((x) => ({ value: x, label: x }))}
        />
      </CModal>

      <CModal
        size="lg"
        visible={openModalRanges}
        backdrop="static"
        onClose={() => setOpenModalRanges(false)}>
        <FormulaRanges formulaId={formulaId} closeModal={() => closeModal()} />
      </CModal>
    </>
  );
};

export default Formulas;